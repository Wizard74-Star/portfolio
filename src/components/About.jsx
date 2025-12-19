import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const About = () => {
  const profile = useSelector((state) => state.portfolio.profile);

  const paragraphs = [
    profile.description,
    'I specialize in building modern, responsive user interfaces and robust backend services using JavaScript, TypeScript, Python, and Node.js ecosystems. On the frontend, I have extensive experience with React.js, Next.js, Vue.js, and Nuxt.js, creating highly interactive, mobile-first applications with Tailwind CSS and Tailwind UI. On the backend, I design and implement secure, scalable APIs and microservices using FastAPI, Django, Flask, and NestJS, supporting both RESTful and GraphQL architectures.',
    'A core strength of my profile is video streaming and media processing. I have hands-on experience with FFmpeg-based pipelines, real-time and on-demand streaming workflows, and performance-critical systems involving computer vision and AI acceleration. I have worked with NVIDIA technologies including YOLO, NVIDIA DeepStream, NVIDIA Jetson, and NVIDIA Omniverse to build intelligent, GPU-accelerated solutions for video analytics and streaming optimization.',
    'I am highly proficient in database design and optimization, working with PostgreSQL, MySQL, MongoDB, and Redis to ensure data integrity, low latency, and scalability. I collaborate closely with product managers, designers, and DevOps teams, and I am comfortable owning features end-to-end—from architecture and development to testing, deployment, and maintenance.'
  ];

  return (
    <section
      id="about"
      className="section-container bg-white dark:bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {paragraphs.map((para, index) => (
            <motion.p
              key={index}
              className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed ${index !== paragraphs.length - 1 ? 'mb-6' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

