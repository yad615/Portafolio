import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { Code, BookOpen, Star, Github, Linkedin, Mail, ExternalLink, Book, Award, Coffee } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effect for hero section
  const heroRef = useRef(null);
  const { scrollY: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(heroScrollY, [0, 1], ["0%", "50%"]);

  // Mouse trail effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
  {
    title: "OrientaTec - Página Web para Test Vocacional",
    description: "Desarrollo de una página web interactiva para el test vocacional 'OrientaTec', que ayuda a los estudiantes a identificar sus áreas de interés. Utilizando React para la interfaz y Spring Boot para la gestión del backend.",
    technologies: ["React", "Spring Boot", "JavaScript", "CSS"],
    image: "/images/download.jpeg",
    category: "Academic",
    id: 1
    
  },
  {
    title: "OrientaTec - Aplicación Móvil para Test Vocacional",
    description: "Creación de una aplicación móvil para 'OrientaTec', que ofrece un test vocacional interactivo para mejorar la experiencia del usuario. Desarrollada con Kotlin para la interfaz móvil y Spring Boot para el backend.",
    technologies: ["Kotlin", "Spring Boot", "Android", "Java"],
    image: "/images/app.png",
    category: "Academic",
    id: 2
  },
  {
    title: "WordWise - Plataforma para el Aprendizaje de Verbos en Inglés",
    description: "Desarrollo de una plataforma web interactiva para el aprendizaje de verbos en inglés, utilizando Django como framework principal y MySQL como sistema gestor de base de datos.",
    technologies: ["Django", "MySQL", "HTML", "CSS"],
    image: "/images/WordWise.png",
    category: "Academic",
    id: 3
  }
];

  

  const skills = [
    {
      category: "Fundamentos",
      techs: [
        { name: "HTML/CSS", level: 65 },
        { name: "Java", level: 70 },
        { name: "Python", level: 65 },
        { name: "Kotlin", level: 65 }, 
        { name: "SQL", level: 70 },     
      ]
    },
    {
      category: "Frameworks y Librerías",
      techs: [
        { name: "React", level: 70 },    
        { name: "Spring Boot", level: 65 },
        { name: "Django", level: 70 },  
      ]
    },
    {
      category: "Herramientas",
      techs: [
        { name: "Git/GitHub", level: 75 },
        { name: "VS Code", level: 85 },
        { name: "MySQL", level: 70 },   
        { name: "Postman", level: 65 },
        { name: "Android Studio", level: 65 },
        { name: "Figma", level: 60 },   
      ]
    }
  ];
  

  const courses = [ 
    {
      name: "Desarrollo de Aplicaciones Web",
      description: "Desarrollo de aplicaciones web con Java EE, Spring Boot y servicios web.",
      grade: "18/20"
    },
    {
      name: "Programación Orientada a Objetos",
      description: "Fundamentos de POO y patrones de diseño.",
      grade: "16/20"
    },
    {
      name: "Programación en Móviles",
      description: "Desarrollo de aplicaciones Android con acceso a bases de datos y recursos del dispositivo.",
      grade: "18/20"
    }
  ];
  
  
  const achievements = [
    "Semifinalista Hackathon Tecsup 2024",
    "Semifinalista Innovation Challenge Tecsup 2024"
  ];

 
  

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Y.A.
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">

<motion.nav
  className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-lg border-b border-gray-800"
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex justify-between items-center">
      <motion.div
        className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          document.querySelector('section').scrollIntoView({ behavior: 'smooth' });
        }}
        style={{ cursor: 'pointer' }}
      >
        Y.A.
      </motion.div>
      <div className="flex space-x-8">
        <motion.button
          className="relative text-gray-300 hover:text-white transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => {
            document.querySelector('section:nth-of-type(2)').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          About
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        <motion.button
          className="relative text-gray-300 hover:text-white transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => {
            document.querySelector('section:nth-of-type(3)').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Projects
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        <motion.button
          className="relative text-gray-300 hover:text-white transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => {
            document.querySelector('section:nth-of-type(4)').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Courses
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        <motion.button
          className="relative text-gray-300 hover:text-white transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => {
            document.querySelector('section:last-of-type').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </div>
  </div>
</motion.nav>


<section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 font-lexend">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-gray-900/50 to-gray-900/70" />
    
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-1 w-1 bg-purple-500/20 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>

  <motion.div
    className="relative z-10 text-center px-4 max-w-4xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <motion.h1
      className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] font-lexend"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.34, 1.56, 0.64, 1]
      }}
    >
      Yadhira Alcantara
    </motion.h1>

    <motion.h2
      className="text-2xl md:text-3xl text-gray-300 mb-4 font-light tracking-wide font-lexend"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      Estudiante de Diseño y Desarrollo de Software
    </motion.h2>

    <motion.p
      className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-lexend"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8 }}
    >
      4to Ciclo • Apasionada por el desarrollo web y las nuevas tecnologías
    </motion.p>

    <motion.div
      className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <motion.button
        className="group px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold 
                 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300
                 relative overflow-hidden font-lexend"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Ver Proyectos</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          whileHover={{ scale: 1.1 }}
        />
      </motion.button>

      <motion.a
        href="/cv/Modelo de CV_Pasantías_Alcantara.pdf"
        download
        className="group px-8 py-3 border-2 border-pink-500 rounded-full font-semibold
                 text-white hover:bg-pink-500/10 transition-all duration-300
                 flex items-center justify-center gap-2 font-lexend"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)" }}
        whileTap={{ scale: 0.95 }}
      >
        Descargar CV
        <motion.svg 
          className="w-5 h-5"
          initial={{ y: 0 }}
          whileHover={{ y: 2 }}
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.a>
    </motion.div>

    {/* Scroll Indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      
    </motion.div>
  </motion.div>
</section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Soy estudiante de Diseño y Desarrollo de Software de 4to ciclo, apasionada por la tecnología 
            y el desarrollo web. Me encanta aprender nuevas tecnologías y participar en proyectos 
            que me ayuden a crecer profesionalmente. Actualmente, estoy enfocada en mejorar mis 
            habilidades en desarrollo web.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="p-6 bg-gray-800 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <Book className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Estudiante Activa</h3>
              <p className="text-gray-400">Promedio ponderado 17.5/20</p>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-800 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <Code className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Desarrolladora Jr.</h3>
              <p className="text-gray-400">Enfoque en Web Development</p>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-800 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <Coffee className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Siempre Aprendiendo</h3>
              <p className="text-gray-400">Cursos y proyectos personales</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mis Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

 <section className="py-20 px-6 bg-gray-800/50">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Cursos Relevantes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <BookOpen className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400">Nota:</span>
                <span className="text-white font-semibold">{course.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Habilidades Técnicas
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="bg-gray-800 p-6 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-purple-400">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.techs.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-800/50">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Logros
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-gray-900 p-4 rounded-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: 10 }}
              >
                <Award className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
  ¡Conectemos!
</h2>
<p className="text-gray-400 mb-12 text-lg">
  Estoy interesada en oportunidades de prácticas y proyectos colaborativos.
  ¡Me encantaría conversar contigo!
</p>
<div className="flex justify-center space-x-6">
  <motion.a
    href="https://github.com/yad615"
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
    whileHover={{ y: -5 }}
  >
    <Github className="w-6 h-6" />
  </motion.a>
  <motion.a
    href="https://www.linkedin.com/in/yadhira-geraldine-alcantara-rodriguez-6b745a339/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
    whileHover={{ y: -5 }}
  >
    <Linkedin className="w-6 h-6" />
  </motion.a>
  <motion.a
    href="mailto:yadhira.alcantara@tecsup.edu.pe"
    className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
    whileHover={{ y: -5 }}
  >
    <Mail className="w-6 h-6" />
  </motion.a>
  <motion.a
  href="https://wa.me/923190931?text=Hola,%20he%20visto%20tu%20portafolio%20y%20me%20gustaría%20hablar%20más%20sobre%20tus%20trabajos%20y%20posibilidades%20de%20colaboración."
  className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
  whileHover={{ y: -5 }}
>
  <FaWhatsapp className="w-6 h-6" />
</motion.a>

</div>

        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            YA
          </motion.div>
          <p className="text-gray-400 mb-6">
            Estudiante de Diseño y Desarrollo de Software
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Yadhira Alcantara. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 100 ? 1 : 0 }}
      >
        ↑
      </motion.button>
    </div>
  );
};

export default Portfolio;