import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Gallery from '../pages/Gallery';
import { routeConstants } from '../constants/routeConstants';

const RoutesConfig = () => {
    return (
        <Routes>
            {/* Layout Wrapper */}
            <Route element={<MainLayout />}>
                <Route path={routeConstants?.HOME_URL} element={<Home />} />
                <Route path={routeConstants?.ABOUT_URL} element={<About />} />
                <Route path={routeConstants?.GALLERY_URL} element={<Gallery />} />
                <Route path={routeConstants?.SERVICES_URL} element={<Services />} />
                <Route path={routeConstants?.CONTACT_URL} element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default RoutesConfig;
