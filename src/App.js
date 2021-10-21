import Counter from "./components/Counter"
import Fetch from "./components/Fetch"
import Post from './components/Post'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Fetch />
      {/* <Post /> */}
    </div>
  );
}

export default App;
