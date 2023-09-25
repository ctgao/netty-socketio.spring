import logo from './logo.svg';
import './App.css';
import './ChatClient.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div style={{display: 'inline-block'}}>
            Combining Socket.io and React <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
      </div>
      <div className="MainBody">
        <h1>Chat Client</h1>
        <div id="console" class="well"></div>

        <form className="well form-inline" onsubmit="return false;">
          <input id="msg" class="input-xlarge" type="text" placeholder="Type something..."/>
          <button type="button" class="btn" id="send">Send</button>
          <button type="button" class="btn">Disconnect</button>
        </form>
      </div>
    </div>
  );
}

export default App;
