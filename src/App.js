import logo from './fathym.svg';
import final from './pt.png';
import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to Fathym's first Discord live stream</h3>
        <h4>Don't have an invite? Don't worry join <a href="https://discord.gg/qh3eCBgpC5" rel="noreferrer" target="_blank">here</a></h4>
      </header>
      <div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <Paper elevation={3}
            sx={{
              width: '50vw',
              mb: '30px',
              fontSize: '20px',
              padding: '20px'
            }}>

            <img src={final} className="App-logo" alt="logo" />
            <p>In this livestream, we'll fork Fathym's Svelte template and use it to build a photo gallery – like “Photo Timez” above.
              We'll push the photo gallery to GitHub and show how easy it is to update to any GitHub build version in Fathym.
              Then, we'll preview the live photo gallery hosted in Fathym and discuss some of the cool things Fathym's doing behind the scenes with micro frontends to make your life easier.</p>
          </Paper>
          <Paper elevation={3}
            sx={{
              width: '50vw',
              mb: '30px',
              pb: '20px',
              padding: '20px',
              fontSize: '20px'
            }}>
            <h3>Here's what you'll need to code along</h3>
            <hr />
            <div>
              <p>
                Fathym Account <a href="https://www.fathym.com/dashboard/" target="_blank" rel="noreferrer">Signup</a>
              </p>
            </div>
            <div>
              <p>
                Github Account <a href="https://github.com/join" target="_blank" rel="noreferrer">Sign up</a>
              </p>
            </div>
            <div>
              <p>
                VS Code <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">Download</a>
              </p>
            </div>
            <div>
              Nodejs <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">Download</a>
            </div>
            <br/>
            <div>
              Photos for your gallary
            </div>
          </Paper>
          <Paper elevation={3}
            sx={{
              width: '50vw',
              mb:'30px',
              pb: '20px',
              padding: '20px',
              fontSize: '20px'
            }}>
            <h3>Want to learn more?</h3>
            <hr />
            <a href="https://www.fathym.com/docs/guides/deploying/frameworks/svelte/" rel="noreferrer" target="_blank">Fathym's deploying Svelte guide</a>
            <br />
            <a href="https://www.fathym.com/blog/articles/2022/april/2022-04-22-deploy-svelte-instead-of-documentaries" rel="noreferrer" target="_blank">Why you should deploy a Svelte website instead of watching documentaries</a>
            <br />
            <a href="https://www.fathym.com/svelte-deployment" rel="noreferrer" target="_blank">See How Svetle compares to other Javascript frameworks</a>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default App;
