const spawn = require('child_process').spawn;

//? static
// export const runtime = 'edge';

const App = () => {
  spawn('npm run render MyComp public/videos/video.mp4', { stdio: 'inherit', shell: true });

  // fb auth
  // series([
  //   () =>
  //     exec(
  //       'curl -X GET "https://graph.facebook.com/oauth/access_token?client_id={your-app-id}&client_secret={your-app-secret}&grant_type=client_credentials"'
  //     ),
  // ]);

  fetch(`https://graph.facebook.com/100095032766312/videos`, {
    method: 'POST',
    body: JSON.stringify({
      file_url: 'https://130-61-139-145.nip.io/videos/video.mp4',
      access_token: 'YOUR_PAGE_ACCESS_TOKEN',
      title: 'My Video',
      description: 'Video description',
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));

  return <div>ok</div>;
};

export default App;
