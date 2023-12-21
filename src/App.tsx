import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Start from './pages/Initial/Start'
import PostList from './pages/Post/PostList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Start />}
          />
          <Route
            path='/posts'
            element={<PostList />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
