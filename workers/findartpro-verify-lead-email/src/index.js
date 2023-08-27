/* eslint-disable */

import { connect } from '@planetscale/database';

function validateToken(token) {
  const jwtSecret = 'hello@world?!123';
  const [encodedHeader, encodedPayload, signature] = token.split('.');

  const calculatedSignature = btoa(encodedHeader + '.' + encodedPayload + jwtSecret);

  if (calculatedSignature === signature) {
    return JSON.parse(atob(encodedPayload));
  } else {
    return null; // Invalid token
  }
}

export default {
  async fetch(request, env, ctx) {
    const config = {
      host: env.DATABASE_HOST,
      username: env.DATABASE_USERNAME,
      password: env.DATABASE_PASSSWORD,
      fetch: (url, init) => {
        delete init['cache'];
        return fetch(url, init);
      },
    };

    // parse url request - e-mail
    const { searchParams } = new URL(request.url);
    let token = searchParams.get('token');

    console.log('token', token);

    const connection = connect(config);
    const data = await connection.execute('SELECT * FROM lead_emails');

    const decodedUser = validateToken(token);

    if (decodedUser) {
      console.log('Validated User:', decodedUser);
    } else {
      console.log('Invalid Token');
    }

    return new Response(JSON.stringify(data.rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
