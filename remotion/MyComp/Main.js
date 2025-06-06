import { z } from 'zod';
import { AbsoluteFill, Sequence, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CompositionProps } from '../../types/constants';
import { NextLogo } from './NextLogo';
import { loadFont, fontFamily } from '@remotion/google-fonts/Inter';
import React, { useMemo } from 'react';
import { Rings } from './Rings';
import { TextFade } from './TextFade';

loadFont();

const container = {
  backgroundColor: 'white',
};

const logo = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const Main = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const transitionStart = 2 * fps;
  const transitionDuration = 1 * fps;

  const logoOut = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: transitionDuration,
    delay: transitionStart,
  });

  const titleStyle = useMemo(() => {
    return { fontFamily, fontSize: 70 };
  }, []);

  return (
    <AbsoluteFill style={container}>
      <Sequence durationInFrames={transitionStart + transitionDuration}>
        <Rings outProgress={logoOut}></Rings>
        <AbsoluteFill style={logo}>
          {/* <NextLogo outProgress={logoOut}></NextLogo> */}
        </AbsoluteFill>
      </Sequence>
      <Sequence from={transitionStart + transitionDuration / 2}>
        <TextFade>
          <h1 style={titleStyle}>{title}</h1>
        </TextFade>
      </Sequence>
    </AbsoluteFill>
  );
};
