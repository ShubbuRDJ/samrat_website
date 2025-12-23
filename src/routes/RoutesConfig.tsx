import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const RoutesConfig = () => {
    return (
        <Routes>
            {/* Layout Wrapper */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Home />} />
                <Route path="/services" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default RoutesConfig;
