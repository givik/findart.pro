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
  return <div>ok</div>;
};

export default App;