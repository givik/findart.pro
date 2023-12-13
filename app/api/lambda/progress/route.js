import { speculateFunctionName, AwsRegion, getRenderProgress } from '@remotion/lambda/client';
import { DISK, RAM, REGION, TIMEOUT } from '../../../../config.mjs';
import { executeApi } from '../../../../helpers/api-response';
import { ProgressRequest, ProgressResponse } from '../../../../types/schema';

export default function Page({ repo }) {
  return repo.stargazers_count;
}

export const POST = executeApi(ProgressRequest, async (req, body) => {
  async function getStaticProps() {
    const renderProgress = await getRenderProgress({
      bucketName: body.bucketName,
      functionName: speculateFunctionName({
        diskSizeInMb: DISK,
        memorySizeInMb: RAM,
        timeoutInSeconds: TIMEOUT,
      }),
      region: REGION,
      renderId: body.id,
    });

    if (renderProgress.fatalErrorEncountered) {
      return {
        type: 'error',
        message: renderProgress.errors[0].message,
      };
    }

    if (renderProgress.done) {
      return {
        type: 'done',
        url: renderProgress.outputFile,
        size: renderProgress.outputSizeInBytes,
      };
    }

    return {
      type: 'progress',
      progress: Math.max(0.03, renderProgress.overallProgress),
    };
  }
});
