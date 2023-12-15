/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

addEventListener('fetch', (event) => {
  event.preventDefault();
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  });
}

addEventListener('scheduled', (event) => {
  event.preventDefault();
  doScheduledThing();
});

async function doScheduledThing(request) {
  // Finished

  const res = await fetch('https://findart.pro/post-on-social', {
    method: 'GET',
  });

  return res.json();
}
