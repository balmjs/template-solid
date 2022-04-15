import logo from './assets/logo.svg';

function App() {
  return (
    <div class="app">
      <header class="header">
        <img src={logo} class="logo" alt="logo" />
        <p>
          Edit <code>src/scripts/app.jsx</code> and save to reload.
        </p>
        <a
          class="link"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Solid
        </a>
      </header>
    </div>
  );
}

export default App;
