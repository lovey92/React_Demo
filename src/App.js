import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageList from './containers/ImageList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ImageList/>}/>
          <Route> 404 Not Found!! </Route>
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
