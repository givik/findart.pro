import { z } from 'zod';
import { RenderMediaOnLambdaOutput } from '@remotion/lambda/client';
import { ProgressRequest, ProgressResponse, RenderRequest } from '../types/schema';
import { CompositionProps } from '../types/constants';
import { ApiResponse } from '../helpers/api-response';

const makeRequest = async (endpoint, body) => {
  const result = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  });
  const json = await result.json();
  if (json.type === 'error') {
    throw new Error(json.message);
  }

  return json.data;
};

export const renderVideo = async ({ id, inputProps }) => {
  const body = {
    id,
    inputProps,
  };

  return makeRequest < RenderMediaOnLambdaOutput > ('/api/lambda/render', body);
};

export const getProgress = async ({ id, bucketName }) => {
  const body = {
    id,
    bucketName,
  };

  return makeRequest('/api/lambda/progress', body);
};
