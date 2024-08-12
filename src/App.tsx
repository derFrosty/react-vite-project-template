import { useState } from 'react';
import ReactLogo from './assets/react.svg';
import ViteLogo from '../public/vite.svg';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="logos">
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <div className="logo">
                        <ViteLogo />
                    </div>
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <div className="logo react">
                        <ReactLogo />
                    </div>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button type="button" onClick={() => setCount((c) => c + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
