
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Welcome to ask magic 8-ball</h1>
        <p className="info">Ask a question for an answer...</p>
        <input type="text" className="question" />
        <div className="eight-ball">
            <div className="content">
                <p className="error"></p>
                <p className="answer"></p>
                <p className="eight">8</p>
            </div>

        </div>
    </div>
  );
}

export default App;
