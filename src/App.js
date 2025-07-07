import React, { useState, useEffect, useRef } from "react";
import { Link, Element, Events, scrollSpy } from "react-scroll";
import { motion } from "framer-motion";
import Dock from './components/Dock';
import Particles from "./Particles";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope as FaGmail, FaReact, FaHtml5, FaJs, FaCss3Alt, FaNodeJs, FaPython, FaBootstrap, FaGraduationCap, FaSchool, FaCode } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiFramer, SiFlask, SiDjango } from 'react-icons/si';
import BlobCursor from './BlobCursor';
import Navbar from './components/Navbar';
import VariableProximity from './components/VariableProximity';
import PixelTransition from './components/PixelTransition';
import ChromaGrid from "./ChromaGrid";
import "./App.css";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Listen for scroll events to update active section
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    scrollSpy.update();
    window.addEventListener("scroll", scrollSpy.update);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", scrollSpy.update);
    };
  }, []);

  const profileImage = (isSecond = false) => (
    <div style={{ width: "100%", height: "100%", padding: "6px" }}>
      <img
        src="pic1.JPG"
        alt="Profile"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
          border: "6px solid #f9ca24",
          boxShadow: isSecond ? "0 8px 32px rgba(249, 202, 36, 0.4)" : "0 8px 32px rgba(31,162,255,0.2)",
        }}
      />
    </div>
  );

  return (
    <div className="App" style={{ background: "#000", position: "relative", overflow: "hidden" }}>
      <Particles
        particleCount={400} // Increased amount
        particleSpread={10}
        speed={0.1}
        particleColors={["#f9ca24"]} // Yellow color
        alphaParticles={true}
        particleBaseSize={180} // Increased size
        sizeRandomness={1}
        cameraDistance={20}
        disableRotation={false}
      />
      <Navbar />
      <div style={{ height: "80px" }}></div>
      <BlobCursor
        blobType="circle"
        fillColor="#f9ca24"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.9)"
        opacities={[0.4, 0.3, 0.2]}
        shadowColor="rgba(249, 202, 36, 0.3)"
        shadowBlur={15}
        shadowOffsetX={5}
        shadowOffsetY={5}
        filterStdDeviation={20}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
      />
      <div className="main-content"
        style={{
          margin: "0 auto",
          padding: "4rem 0",
          width: "100%",
          maxWidth: "1400px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1000px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10, // Ensure content is above particles
        }}
      >
        <Element name="home" className="section">
          <div>
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "90vh",
                padding: "2rem"
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                  fontSize: "4rem",
                  fontWeight: 800,
                  background: "linear-gradient(45deg, #f9ca24, #fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "1.5rem",
                  letterSpacing: "3px",
                  textShadow: "0 2px 20px rgba(0,0,0,0.2)",
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                Hi, I'm <span style={{color: "#fff"}}>Roshan Subhash</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "#eee",
                  marginBottom: "2.5rem",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  fontFamily: "'Roboto', sans-serif"
                }}
              >
                SOFTWARE ENGINEERING STUDENT
              </motion.h2>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <motion.img
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  src="pic1.JPG"
                  alt="Profile"
                  style={{
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "6px solid #f9ca24",
                    boxShadow: "0 8px 32px rgba(31,162,255,0.2)",
                    transition: "all 0.3s ease",
                    marginBottom: "2rem"
                  }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{
                  display: "flex",
                  gap: "1.5rem",  // Reduced gap slightly
                  justifyContent: "center",  // Center the buttons
                  width: "100%",  // Take full width to ensure proper centering
                  maxWidth: "500px",  // Limit the width
                  margin: "0 auto"  // Center the container
                }}
              >
                <a
                  href="/Resume1.pdf"
                  download="Roshan_Resume.pdf"
                  style={{
                    display: "inline-block",
                    padding: "0.8rem 2rem",  // Slightly reduced padding
                    background: "#f9ca24",
                    color: "#000",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    letterSpacing: "1px",
                    border: "2px solid #f9ca24",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(249, 202, 36, 0.2)",
                    minWidth: "180px",  // Added minimum width
                    textAlign: "center"  // Center text
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#f9ca24";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#f9ca24";
                    e.target.style.color = "#000";
                  }}
                >
                  Download Resume
                </a>
                <a
                  href="/Resume1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "0.8rem 2rem",  // Slightly reduced padding
                    background: "transparent",
                    color: "#f9ca24",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    letterSpacing: "1px",
                    border: "2px solid #f9ca24",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(249, 202, 36, 0.2)",
                    minWidth: "180px",  // Added minimum width
                    textAlign: "center"  // Center text
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#f9ca24";
                    e.target.style.color = "#000";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#f9ca24";
                  }}
                >
                  View Resume
                </a>
              </motion.div>
            </motion.section>
          </div>
        </Element>
        <Element name="about" className="section">
          <motion.section
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              background: "transparent",
              backdropFilter: "none",
              border: "none",
              boxShadow: "none",
              width: "100%",
              maxWidth: "1000px",
              margin: "0 auto",
              padding: "3rem",
              minHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative"
            }}
          >
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: "4rem",
                color: "#f9ca24",
                marginBottom: "3rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)"
              }}
            >
              <VariableProximity
                label="About Me"
                fromFontVariationSettings="'wght' 400, 'opsz' 14"
                toFontVariationSettings="'wght' 800, 'opsz' 48"
                radius={100}
                falloff="exponential"
              />
            </motion.h2>
            <div style={{ 
              marginBottom: "2rem", 
              lineHeight: "2",
              fontSize: "1.4rem"
            }}>
              <VariableProximity
                label="I'm a passionate Computer Science Engineering student at SCMS School of Engineering, Ernakulam, Kerala, eager to explore the ever-evolving world of technology. My interests lie in software development, problem-solving, and innovative applications of computing to real-world challenges. Through my academic journey, I've honed my skills in programming, data structures, algorithms, and emerging tech trends."
                fromFontVariationSettings="'wght' 300, 'opsz' 14"
                toFontVariationSettings="'wght' 600, 'opsz' 48"
                radius={80}
                falloff="linear"
              />
            </div>
            <div style={{ 
              marginBottom: "2.5rem", 
              lineHeight: "2",
              fontSize: "1.4rem"
            }}>
              <VariableProximity
                label="Beyond coursework, I enjoy engaging in tech communities, working on personal projects, and collaborating on initiatives that push the boundaries of technology. I aspire to build solutions that make a difference and continuously grow as an engineer and thinker."
                fromFontVariationSettings="'wght' 300, 'opsz' 14"
                toFontVariationSettings="'wght' 600, 'opsz' 48"
                radius={80}
                falloff="linear"
              />
            </div>
          </motion.section>
        </Element>
        <Element name="education" className="section">
          <motion.section
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              background: "transparent", // Changed from rgba(0, 0, 0, 0.95)
              borderRadius: "0", // Removed border radius
              border: "none", // Removed border
              boxShadow: "none", // Removed box shadow
              backdropFilter: "none", // Removed blur
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "4rem",
              minHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <motion.h2
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "3.5rem",
                color: "#f9ca24",
                marginBottom: "3rem",
                textShadow: "0 0 20px rgba(249, 202, 36, 0.3)"
              }}
            >
              Education & Certifications
            </motion.h2>
            
            <div style={{ width: "100%", maxWidth: "900px" }}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "20px",
                  padding: "2rem",
                  marginBottom: "2rem",
                  border: "1px solid rgba(249, 202, 36, 0.2)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <FaGraduationCap style={{ color: "#f9ca24", fontSize: "2.5rem" }} />
                  <div>
                    <h3 style={{ color: "#f9ca24", fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                      B.Tech in Computer Science Engineering
                    </h3>
                    <p style={{ color: "#fff", fontSize: "1.2rem" }}>SCMS School of Engineering and Technology</p>
                  </div>
                </div>
                <p style={{ color: "#aaa", marginBottom: "1rem" }}>2023 - 2027</p>
                <ul style={{ color: "#fff", fontSize: "1.1rem", lineHeight: "1.8" }}>
                  <li>Current CGPA: 8.03</li>
                  <li>Member of the College Coding Club</li>
                  <li>Participated in various hackathons and coding competitions</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "20px",
                  padding: "2rem",
                  marginBottom: "2rem",
                  border: "1px solid rgba(249, 202, 36, 0.2)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <FaSchool style={{ color: "#f9ca24", fontSize: "2.5rem" }} />
                  <div>
                    <h3 style={{ color: "#f9ca24", fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                      Higher Secondary Education
                    </h3>
                    <p style={{ color: "#fff", fontSize: "1.2rem" }}>Mar Coorlose Higher Secondary School, Pattimattom</p>
                  </div>
                </div>
                <p style={{ color: "#aaa", marginBottom: "1rem" }}>2021 - 2023</p>
                <ul style={{ color: "#fff", fontSize: "1.1rem", lineHeight: "1.8" }}>
                  <li>Percentage: 97.5%</li>
                  <li>Science Stream with Computer Science</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "20px",
                  padding: "2rem",
                  marginBottom: "2rem",
                  border: "1px solid rgba(249, 202, 36, 0.2)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <FaSchool style={{ color: "#f9ca24", fontSize: "2.5rem" }} />
                  <div>
                    <h3 style={{ color: "#f9ca24", fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                      Secondary School Education
                    </h3>
                    <p style={{ color: "#fff", fontSize: "1.2rem" }}>St Joseph Covent Senior Secondary English Medium School, Pulluvazhy</p>
                  </div>
                </div>
                <p style={{ color: "#aaa", marginBottom: "1rem" }}>2009 - 2021</p>
                <ul style={{ color: "#fff", fontSize: "1.1rem", lineHeight: "1.8" }}>
                  <li>SSLC Percentage: 92%</li>
                  <li>Class Leader and School House Captain</li>
                  <li>Active participant in School Arts and Sports events</li>
                  <li>First prize in District level Science Exhibition</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "20px",
                  padding: "2rem",
                  border: "1px solid rgba(249, 202, 36, 0.2)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <FaCode style={{ color: "#f9ca24", fontSize: "2.5rem" }} />
                  <div>
                    <h3 style={{ color: "#f9ca24", fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                      Certifications
                    </h3>
                  </div>
                </div>
                <ul style={{ color: "#fff", fontSize: "1.1rem", lineHeight: "1.8" }}>
                  <li>Full Stack Web Development - Udemy</li>
                  <li>Python Programming - Coursera</li>
                  <li>Machine Learning Fundamentals - Google</li>
                  <li>AWS Cloud Practitioner - Amazon Web Services</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>
        </Element>
        <Element name="skills" className="section">
          <motion.section
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              background: "transparent",
              backdropFilter: "none",
              border: "none",
              boxShadow: "none",
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "4rem",
              minHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <motion.h2
                initial={{ y: -20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: "3.5rem",
                  color: "#f9ca24",
                  marginBottom: "3rem",
                  textShadow: "0 0 20px rgba(249, 202, 36, 0.3)"
                }}
              >
                Skills & Technologies
              </motion.h2>
              <div className="skills-grid" style={{
                display: "flex",
                gap: "4rem",
                flexWrap: "wrap",
                width: "100%",
                maxWidth: "1100px",
                margin: "0 auto"
              }}>
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    flex: "1 1 400px",
                    padding: "2rem",
                    background: "transparent", // Removed background
                    border: "none", // Removed border
                    boxShadow: "none" // Removed shadow
                  }}
                >
                  <h3 style={{
                    color: "#f9ca24",
                    fontSize: "2rem",
                    marginBottom: "2rem",
                    letterSpacing: "2px",
                    textShadow: "none" // Removed text shadow
                  }}>Frontend</h3>
                  <ul className="skills-list">
                    <li>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaReact style={{ color: '#61DAFB', fontSize: '2rem' }} />
                      </span>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ 
                          width: "80%",
                          boxShadow: "none" // Removed shadow
                        }}>
                          <span className="skill-bar-label">80%</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaJs style={{ color: '#F7DF1E', fontSize: '2rem' }} />
                      </span>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: "75%" }}>
                          <span className="skill-bar-label" style={{ color: '#F7DF1E' }}>75%</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <FaHtml5 style={{ color: '#E34F26', fontSize: '2rem' }} />
                          <FaCss3Alt style={{ color: '#1572B6', fontSize: '2rem' }} />
                        </div>
                      </span>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: "78%" }}>
                          <span className="skill-bar-label" style={{ color: '#E34F26' }}>78%</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <FaBootstrap style={{ color: '#7952B3', fontSize: '2rem' }} />
                          <SiTailwindcss style={{ color: '#06B6D4', fontSize: '2rem' }} />
                        </div>
                      </span>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: "65%" }}>
                          <span className="skill-bar-label" style={{ color: '#7952B3' }}>65%</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SiFramer style={{ color: '#0055FF', fontSize: '2rem' }} />
                      </span>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: "60%" }}>
                          <span className="skill-bar-label" style={{ color: '#0055FF' }}>60%</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ 
                    flex: "1 1 400px",
                    padding: "2rem",
                    background: "transparent", // Removed background
                    border: "none", // Removed border
                    boxShadow: "none" // Removed shadow
                  }}
                >
                  <h3 style={{
                    color: "#f9ca24",
                    fontSize: "2rem",
                    marginBottom: "2rem",
                    letterSpacing: "2px"
                  }}>Backend</h3>
                  <ul className="skills-list">
                    <li>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaNodeJs style={{ color: '#339933', fontSize: '2rem' }} />
                      </span>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: "70%" }}>
                          <span className="skill-bar-label" style={{ color: '#339933' }}>70%</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SiExpress style={{ color: '#ffffff', fontSize: '2rem' }} />
                      </span>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: "68%" }}>
                          <span className="skill-bar-label" style={{ color: '#ffffff' }}>68%</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <FaPython style={{ color: '#3776AB', fontSize: '2rem' }} />
                          <SiFlask style={{ color: '#ffffff', fontSize: '2rem' }} />
                          <SiDjango style={{ color: '#092E20', fontSize: '2rem' }} />
                        </div>
                      </span>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: "60%" }}>
                          <span className="skill-bar-label" style={{ color: '#3776AB' }}>60%</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      REST APIs
                    </span>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: "45%" }}>
                        <span className="skill-bar-label" style={{ color: '#f9ca24' }}>45%</span>
                      </div>
                    </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </Element>
        <Element name="projects" className="section">
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              marginBottom: "32px",
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "5rem 4rem",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
                color: "#f9ca24",
                letterSpacing: "1px",
                fontWeight: 700,
                textShadow: "0 2px 16px #0008"
              }}
            >
              Projects
            </h2>
            <ChromaGrid
              items={[
                {
                  image: "/pic2.png",
                  title: "Interncrow",
                  url: "https://github.com/progprnv/Interncrow",
                  borderColor: "#f9ca24",
                  gradient: "linear-gradient(145deg, rgba(249, 202, 36, 0.2), rgba(0, 0, 0, 0.95))"
                },
                {
                  image: "/pic3.png",
                  title: "ConvinceAyoo",
                  url: "https://github.com/progprnv/ConvinceAyoo",
                  borderColor: "#f9ca24",
                  gradient: "linear-gradient(145deg, rgba(249, 202, 36, 0.2), rgba(0, 0, 0, 0.95))"
                },
                {
                  image: "https://repository-images.githubusercontent.com/531727667/afbb1fc2-8689-4918-9d97-7e40d7c363d8",
                  title: "Weather Dashboard",
                  url: "https://github.com/progprnv/weather-dashboard",
                  borderColor: "#f9ca24",
                  gradient: "linear-gradient(145deg, rgba(249, 202, 36, 0.2), rgba(0, 0, 0, 0.95))"
                }
              ]}
              columns={3}
              rows={1}
              radius={300}
            />
          </motion.section>
        </Element>
        <Element name="contact" className="section">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: "transparent",
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "5rem 2rem",
              minHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* Header Section */}
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{
                fontSize: "2.5rem",
                color: "#f9ca24",
                marginBottom: "1rem",
                fontWeight: 700,
                letterSpacing: "1px"
              }}>Contact</h2>
              <p style={{ 
                color: "#ccc", 
                fontSize: "1.2rem", 
                maxWidth: 600,
                lineHeight: 1.6,
                margin: "0 auto"
              }}>
                Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            {/* Main Content */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              width: "100%",
              maxWidth: "1000px",
              alignItems: "start"
            }}>
              
              {/* Contact Information */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <h3 style={{
                  color: "#f9ca24",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  fontWeight: 600
                }}>Get in Touch</h3>
                <p style={{ color: "#ccc", fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  I'm currently available for freelance work and open to discussing new opportunities. Feel free to reach out!
                </p>

                {/* Contact Details */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                      background: "#f9ca24",
                      color: "#000",
                      padding: "0.8rem",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <FaGmail style={{ fontSize: "1.2rem" }} />
                    </div>
                    <div>
                      <p style={{ color: "#fff", fontWeight: 600, margin: 0, fontSize: "1rem" }}>Email</p>
                      <a href="mailto:roshan@example.com" style={{ 
                        color: "#ccc", 
                        textDecoration: "none", 
                        fontSize: "0.95rem",
                        transition: "color 0.3s"
                      }}
                      onMouseOver={e => e.target.style.color = '#f9ca24'}
                      onMouseOut={e => e.target.style.color = '#ccc'}
                      >
                        roshan@example.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                      background: "#f9ca24",
                      color: "#000",
                      padding: "0.8rem",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <FaLinkedin style={{ fontSize: "1.2rem" }} />
                    </div>
                    <div>
                      <p style={{ color: "#fff", fontWeight: 600, margin: 0, fontSize: "1rem" }}>LinkedIn</p>
                      <a href="https://www.linkedin.com/in/roshan-subhash-31783231a" target="_blank" rel="noopener noreferrer" style={{ 
                        color: "#ccc", 
                        textDecoration: "none", 
                        fontSize: "0.95rem",
                        transition: "color 0.3s"
                      }}
                      onMouseOver={e => e.target.style.color = '#f9ca24'}
                      onMouseOut={e => e.target.style.color = '#ccc'}
                      >
                        linkedin.com/in/roshan-subhash
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                      background: "#f9ca24",
                      color: "#000",
                      padding: "0.8rem",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <FaGithub style={{ fontSize: "1.2rem" }} />
                    </div>
                    <div>
                      <p style={{ color: "#fff", fontWeight: 600, margin: 0, fontSize: "1rem" }}>GitHub</p>
                      <a href="https://github.com/R05H10" target="_blank" rel="noopener noreferrer" style={{ 
                        color: "#ccc", 
                        textDecoration: "none", 
                        fontSize: "0.95rem",
                        transition: "color 0.3s"
                      }}
                      onMouseOver={e => e.target.style.color = '#f9ca24'}
                      onMouseOut={e => e.target.style.color = '#ccc'}
                      >
                        github.com/R05H10
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div style={{ marginTop: "2rem" }}>
                  <p style={{ color: "#fff", fontWeight: 600, marginBottom: "1rem", fontSize: "1rem" }}>Follow Me</p>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <a href="https://github.com/R05H10" target="_blank" rel="noopener noreferrer" style={{
                      color: "#ccc",
                      fontSize: "1.5rem",
                      transition: "color 0.3s"
                    }}
                    onMouseOver={e => e.target.style.color = '#f9ca24'}
                    onMouseOut={e => e.target.style.color = '#ccc'}
                    >
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/roshan-subhash-31783231a" target="_blank" rel="noopener noreferrer" style={{
                      color: "#ccc",
                      fontSize: "1.5rem",
                      transition: "color 0.3s"
                    }}
                    onMouseOver={e => e.target.style.color = '#f9ca24'}
                    onMouseOut={e => e.target.style.color = '#ccc'}
                    >
                      <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/_r0sshh_?igsh=MTdsd2dzamxvM2Ew" target="_blank" rel="noopener noreferrer" style={{
                      color: "#ccc",
                      fontSize: "1.5rem",
                      transition: "color 0.3s"
                    }}
                    onMouseOver={e => e.target.style.color = '#f9ca24'}
                    onMouseOut={e => e.target.style.color = '#ccc'}
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "12px",
                padding: "2.5rem",
                border: "1px solid rgba(249, 202, 36, 0.1)"
              }}>
                <h3 style={{
                  color: "#f9ca24",
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                  fontWeight: 600
                }}>Send Message</h3>
                
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for your message! I'll get back to you soon.");
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem"
                  }}
                >
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      required 
                      style={{
                        flex: 1,
                        padding: "0.8rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid #444",
                        background: "#1a1a1a",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "border-color 0.3s"
                      }}
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      required 
                      style={{
                        flex: 1,
                        padding: "0.8rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid #444",
                        background: "#1a1a1a",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "border-color 0.3s"
                      }}
                    />
                  </div>
                  
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    style={{
                      padding: "0.8rem 1rem",
                      borderRadius: "8px",
                      border: "1px solid #444",
                      background: "#1a1a1a",
                      color: "#fff",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s"
                    }}
                  />
                  
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    required 
                    style={{
                      padding: "0.8rem 1rem",
                      borderRadius: "8px",
                      border: "1px solid #444",
                      background: "#1a1a1a",
                      color: "#fff",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s"
                    }}
                  />
                  
                  <textarea 
                    placeholder="Your Message" 
                    required 
                    rows={5} 
                    style={{
                      padding: "0.8rem 1rem",
                      borderRadius: "8px",
                      border: "1px solid #444",
                      background: "#1a1a1a",
                      color: "#fff",
                      fontSize: "1rem",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.3s"
                    }}
                  />
                  
                  <button 
                    type="submit" 
                    style={{
                      padding: "1rem 0",
                      borderRadius: "8px",
                      background: "#f9ca24",
                      color: "#000",
                      fontWeight: 700,
                      fontSize: "1rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}
                    onMouseOver={e => e.target.style.background = '#e6b800'}
                    onMouseOut={e => e.target.style.background = '#f9ca24'}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.section>
        </Element>
        <footer>
          <p>&copy; 2025 Roshan Subhash. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;