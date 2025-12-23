import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import GalleryPreview from '../components/home/GalleryPreview';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <GalleryPreview />
            <Newsletter />
        </>
    );
};

export default Home;
