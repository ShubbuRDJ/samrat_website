import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";

const highlights = [
  "Zero Security Incidents in 2024",
  "500+ Successful Events Secured",
  "Corporate & Private Client Base",
  "50+ Trained Security Personnel",
  "Background Verified Team",
  "Emergency Response Certified",
];

const features = [
  {
    title: "Highly Trained",
    description:
      "All personnel undergo rigorous training in crowd control, conflict resolution, and emergency response.",
    icon: "🛡️",
  },
  {
    title: "Professional Team",
    description:
      "Disciplined, experienced security experts with proven track records in event management.",
    icon: "👥",
  },
  {
    title: "Certified Excellence",
    description:
      "Licensed security professionals with certifications in safety protocols and crowd management.",
    icon: "🎖️",
  },
  {
    title: "24/7 Availability",
    description:
      "Round-the-clock security services available for immediate deployment across all locations.",
    icon: "⏰",
  },
];

const About = () => {
  return (
    <>
      {/* Intro */}
      <section className="bg-white dark:bg-darkSurface py-20">
        <Container>
          <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gray-400" />
              <span className="text-sm font-semibold tracking-widest text-gray-500 dark:text-gray-400">
                ABOUT US
              </span>
              <span className="h-px w-12 bg-gray-400" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Trusted Security Professionals
            </h1>

            <p className="mt-6 text-gray-600 dark:text-gray-400">
              Rishiraj Security Forces has been providing exceptional security
              services with a commitment to professionalism, reliability, and
              safety. Our team ensures peace of mind for every client.
            </p>
          </div>
          </Reveal>
        </Container>
      </section>

      {/* Image + Why Choose Us */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <Reveal>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                  alt="Security Team"
                  className="rounded-2xl w-full object-cover"
                />

                {/* Experience badge */}
                <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-900 rounded-xl px-6 py-4 shadow border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={150}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  Why Choose Rishiraj Security Forces?
                </h2>

                <p className="mt-6 text-gray-600 dark:text-gray-400">
                  Our security personnel are not just guards — they are trained
                  professionals who understand the importance of maintaining
                  safety while ensuring a positive experience for all attendees.
                  With extensive training in crowd control, emergency response,
                  and conflict resolution, our team is prepared for any situation.
                </p>

                <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-green-500 mt-1">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </Container>
      </section>

      {/* Feature Cards */}
      <section className="bg-gray-100 dark:bg-gray-950 py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 120}>
                <div
                  key={feature.title}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary text-white flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
