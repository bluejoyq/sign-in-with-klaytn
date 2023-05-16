import './App.css'
import {SiweMessage} from '@siwk/core';

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          const message = new SiweMessage({
            address:'0x9312217c599f8d77de2fcf96f3aded1401c438bd'
          });
          console.log(message.prepareMessage());
        }}>
          hi
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
