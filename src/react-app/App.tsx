import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about';
import Service from './pages/service';
import NotFound from './pages/404';
import VideoPage from './pages/video';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos/:id" element={<VideoPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}