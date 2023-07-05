import './App.css';
import ChatBox from './ChatBox';
import './ChatBox.css';


function App() {
  const apiKey = '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'; 

  return (
    <div>
      <ChatBox apiKey={apiKey} />
    </div>
  );
}

export default App;
