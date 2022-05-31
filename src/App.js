import logo from './fathym.svg';
import final from './microfe.png';
import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Fathym's Discord live stream</h2>
        <h3>How to modularize your monolith</h3>
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
            <p>Director of Engineering, Jeremy Tomlinson, will walk you through the ins and outs of breaking down and modularizing a monolithic frontend.
              With Fathym, you have the freedom to host your website or web app as a monolithic frontend or as modular "micro apps" or "micro frontends".
              Jeremy will take a monolith example and show how to break apart different sections of the site as modular apps or "routes" built with different frameworks, but hosted together on the same domain.</p>
          </Paper>
          <Paper elevation={3}
            sx={{
              width: '50vw',
              mb: '30px',
              pb: '20px',
              padding: '20px',
              fontSize: '20px'
            }}>
            <h3>Here's what you'll need to follow along</h3>
            <hr />
            <div>
              <p>
                Fathym Account <a href="https://www.fathym.com/dashboard/" target="_blank" rel="noreferrer">Signup</a>
              </p>
            </div>
            <br />
          </Paper>
          <Paper elevation={3}
            sx={{
              width: '50vw',
              mb: '30px',
              pb: '20px',
              padding: '20px',
              fontSize: '20px'
            }}>
            <h3>Want to learn more about micro frontends??</h3>
            <hr />
            <a href="https://www.fathym.com/blog/articles/2022/may/2022-05-31-modularize-your-monolith-one-page" rel="noreferrer" target="_blank">How to modularize your monolith frontend, transition at your pace</a>
            <br />
            <a href="https://www.fathym.com/blog/articles/2022/may/2022-05-16-arcade-and-micro-frontends" rel="noreferrer" target="_blank">Using our arcade to help explain micro frontends</a>
            <br />
            <a href="https://www.fathym.com/blog/articles/2022/march/2022-03-14-a-simple-micro-frontends-explainer" rel="noreferrer" target="_blank">A simple Micro Frontends explainer</a>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default App;
