import { useNavigate } from "react-router-dom";
import Reveal from "../common/Reveal";
import { routeConstants } from "../../constants/routeConstants";

const images = [
    'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
    'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
];

const GalleryPreview = () => {
    const navigate  = useNavigate();
    return (
        <section className="bg-white dark:bg-darkSurface py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">

                {/* Heading */}
                <Reveal>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Gallery Preview
                    </h2>
                </Reveal>

                {/* Subtitle */}
                <Reveal delay={120}>
                    <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                        See our professional security team in action
                    </p>
                </Reveal>

                {/* Images */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <Reveal key={src} delay={index * 120}>
                            <img
                                src={src}
                                alt="Security team"
                                loading="lazy"
                                className="rounded-lg object-cover w-full h-64"
                            />
                        </Reveal>
                    ))}
                </div>

                {/* CTA */}
                <Reveal delay={images.length * 120 + 150}>
                    <button className="mt-10 bg-secondary text-black px-6 py-3 rounded-lg hover:opacity-90 transition" onClick={()=>navigate(routeConstants?.GALLERY_URL)}>
                        View More Photos
                    </button>
                </Reveal>
            </div>
        </section>
    );
};

export default GalleryPreview;
