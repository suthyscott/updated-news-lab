import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/shared/SideBar/SideBar.jsx';
import HackerNews from './components/HackerNews/HackerNews.jsx';
import Reddit from './components/Reddit/Reddit.jsx';
import Medium from './components/Medium/Medium.jsx';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/hacker-news" element={<HackerNews />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/reddit" element={<Reddit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
