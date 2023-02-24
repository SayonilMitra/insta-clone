import './App.css';
import LandingPage from './components/LandingPage.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostView from './components/PostView.js';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/postview' element={<PostView />}></Route>
          <Route path='/upload' element={<UploadForm />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
