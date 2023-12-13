import { NextResponse } from 'next/server';
import { z, ZodType } from 'zod';

export const executeApi = (schema, handler) => async (req) => {
  try {
    const payload = await req.json();
    const parsed = schema.parse(payload);
    const data = await handler(req, parsed);
    return NextResponse.json({
      type: 'success',
      data: data,
    });
  } catch (err) {
    return NextResponse.json(
      { type: 'error', message: err.message },
      {
        status: 500,
      }
    );
  }
};
