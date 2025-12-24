import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import ScrollToTop from '../components/common/ScrollToTop';
const MainLayout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-darkSurface transition-colors">
            <ScrollToTop />

            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
