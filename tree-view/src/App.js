import menus from './tree-view/data'
import './App.css';
import TreeView from './tree-view';

function App() {
  return (
    <div className="App">
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
