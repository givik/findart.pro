/* eslint-disable */

import { connect } from '@planetscale/database';

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

    const connection = connect(config);
    const data = await connection.execute('SELECT id FROM lead_emails LIMIT 1');

    return new Response(JSON.stringify(data.rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
