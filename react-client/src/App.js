import logo from './logo.svg';
import './App.css';
import './ChatClient.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:9092';

export const socket = io(URL, {
  autoConnect: false
});

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      };
  }, []);

  const sendConnect = () => {
    console.log("connecting");
    socket.connect();
  }

  const sendDisconnect = () => {
    console.log("disconnecting");
    socket.disconnect();
  }

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
        <div id="console" className="well">{isConnected ? "AM CONNECTED" : "not connected"}</div>

        <form className="well form-inline">
          <input id="msg" className="input-xlarge" type="text" placeholder="Type something..."/>
          <button type="button" className="btn" id="send">Send</button>
          <button type="button" className="btn" onClick={sendConnect}>Connect</button>
          <button type="button" className="btn" onClick={sendDisconnect}>Disconnect</button>
        </form>
      </div>
    </div>
  );
}

export default App;
