import { series } from 'async';
const exec = require('child_process').exec;

const App = () => {
  series([() => exec('npm run render MyComp')]);
  // series([
  //   () =>
  //     exec(
  //       'curl -X GET "https://graph.facebook.com/oauth/access_token?client_id={your-app-id}&client_secret={your-app-secret}&grant_type=client_credentials"'
  //     ),
  // ]);
  return <div>ok</div>;
};

export default App;
