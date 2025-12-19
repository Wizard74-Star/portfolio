import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const About = () => {
  const profile = useSelector((state) => state.portfolio.profile);

  const paragraphs = [
    profile.description,
    'Extensive experience building responsive, user-centric interfaces using React.js, Next.js, Vue.js, Nuxt.js, Tailwind CSS, and Tailwind UI, paired with robust backend systems developed in Python and Node.js ecosystems including FastAPI, Django, Flask, and NestJS. Highly skilled in designing RESTful and GraphQL APIs, optimizing database performance, and implementing secure, scalable system architectures.',
    'Specialized in video streaming solutions, leveraging FFmpeg and custom media pipelines to support live and on-demand video delivery with high reliability and performance. Strong background in working with relational and NoSQL databases such as PostgreSQL, MySQL, MongoDB, and Redis to support data-intensive applications.'
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

