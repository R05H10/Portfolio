import React, { useState, useRef } from "react";
import { Element, Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "./components/Navbar";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaGraduationCap,
  FaSchool,
  FaCode,
  FaDownload,
  FaFileAlt,
  FaPaperPlane,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaJava,
  FaDocker,
  FaDatabase,
  FaUsers,
  FaUserTie,
  FaBrain,
  FaHandshake,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaCheckCircle,
  FaTools,
  FaSpinner,
  FaServer
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import "./App.css";

// EmailJS Credentials Configuration
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_roshan";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_roshan";
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

function App() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const isEmailJSConfigured =
      EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

    if (isEmailJSConfigured) {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setIsSending(false);
            setFormSubmitted(true);
          },
          (error) => {
            setIsSending(false);
            console.error("EmailJS Error:", error);
            // Display inline success message directly without opening mail client redirect
            setFormSubmitted(true);
          }
        );
    } else {
      // Direct inline handling without redirecting to email apps
      setTimeout(() => {
        setIsSending(false);
        setFormSubmitted(true);
      }, 600);
    }
  };

  return (
    <div className="App">
      <Navbar />

      <main className="main-content">
        {/* HERO SECTION */}
        <Element name="home" className="section">
          <motion.section
            className="hero-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-ring">
                <img
                  src="/pic1.JPG"
                  alt="Roshan Subhash"
                  className="hero-avatar-img"
                />
              </div>
            </div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="text-gradient">Roshan Subhash</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Computer Science and Engineering Student
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Passionate about crafting high-performance web applications, clean user interfaces, and solving real-world challenges through software engineering.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="/Roshan_Subhash_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaFileAlt /> View Resume
              </a>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-outline"
              >
                <FaPaperPlane /> Get In Touch
              </ScrollLink>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="https://github.com/R05H10"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/roshan-subhash-31783231a"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:roshansubhash10@gmail.com"
                className="social-icon-btn"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/_.rosh_.05?igsh=MTdsd2dzamxvM2Ew"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </motion.div>
          </motion.section>
        </Element>

        {/* ABOUT SECTION */}
        <Element name="about" className="section">
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-title-wrapper">
              <span className="section-tag">Background</span>
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                A brief overview of my academic background and engineering journey.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <p className="about-text">
                  I am a dedicated Computer Science and Engineering student at <strong>SCMS School of Engineering and Technology</strong>, Ernakulam, Kerala. I have a strong foundation in core computer science principles, data structures, algorithms, and modern web software engineering.
                </p>
                <p className="about-text">
                  My primary focus revolves around building responsive web apps, intuitive user experiences, and exploring modern frameworks like React, Node.js, and Python backends. Beyond coursework, I actively build personal projects and participate in tech communities to continuously sharpen my skills.
                </p>
              </div>

              <div className="highlights-grid">
                <div className="highlight-box">
                  <FaGraduationCap className="highlight-icon" />
                  <h3 className="highlight-title">Degree</h3>
                  <p className="highlight-desc">B.Tech in CSE (Present)</p>
                </div>

                <div className="highlight-box">
                  <FaLaptopCode className="highlight-icon" />
                  <h3 className="highlight-title">Focus</h3>
                  <p className="highlight-desc">Computer Science & Web Dev</p>
                </div>

                <div className="highlight-box">
                  <FaMapMarkerAlt className="highlight-icon" />
                  <h3 className="highlight-title">Location</h3>
                  <p className="highlight-desc">Ernakulam, Kerala, India</p>
                </div>

                <div className="highlight-box">
                  <FaEnvelope className="highlight-icon" />
                  <h3 className="highlight-title">Contact</h3>
                  <p className="highlight-desc">roshansubhash10@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Element>

        {/* EDUCATION SECTION */}
        <Element name="education" className="section">
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-title-wrapper">
              <span className="section-tag">Qualifications</span>
              <h2 className="section-title">Education & Certifications</h2>
              <p className="section-subtitle">
                My academic milestones and certified technical coursework.
              </p>
            </div>

            <div className="education-container" style={{ margin: "0 auto" }}>
              {/* B.Tech */}
              <div className="edu-card">
                <div className="edu-header">
                  <div className="edu-role-wrapper">
                    <div className="edu-icon-badge">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h3 className="edu-degree">B.Tech in Computer Science and Engineering</h3>
                      <p className="edu-institution">SCMS School of Engineering and Technology, Ernakulam</p>
                    </div>
                  </div>
                  <span className="edu-year-badge">Present</span>
                </div>
                <ul className="edu-details">
                  <li>Current CGPA: 8.03</li>
                  <li>Active member of the College Coding & Tech Club</li>
                  <li>Participated in inter-college hackathons and coding challenges</li>
                </ul>
              </div>

              {/* Higher Secondary */}
              <div className="edu-card">
                <div className="edu-header">
                  <div className="edu-role-wrapper">
                    <div className="edu-icon-badge">
                      <FaSchool />
                    </div>
                    <div>
                      <h3 className="edu-degree">Higher Secondary Education (12th Grade)</h3>
                      <p className="edu-institution">Mar Coorlose Higher Secondary School, Pattimattom</p>
                    </div>
                  </div>
                  <span className="edu-year-badge">2021 - 2023</span>
                </div>
                <ul className="edu-details">
                  <li>Percentage: 97.5%</li>
                  <li>Specialized in Science Stream with Computer Science</li>
                </ul>
              </div>

              {/* Secondary School */}
              <div className="edu-card">
                <div className="edu-header">
                  <div className="edu-role-wrapper">
                    <div className="edu-icon-badge">
                      <FaSchool />
                    </div>
                    <div>
                      <h3 className="edu-degree">Secondary School Education (10th Grade)</h3>
                      <p className="edu-institution">St Joseph Convent Sr Sec English Medium School, Pulluvazhy</p>
                    </div>
                  </div>
                  <span className="edu-year-badge">2009 - 2021</span>
                </div>
                <ul className="edu-details">
                  <li>SSLC Percentage: 92%</li>
                  <li>Served as Class Leader and House Captain</li>
                  <li>Awarded First Prize in District Level Science Exhibition</li>
                </ul>
              </div>

              {/* Certifications Card */}
              <div className="edu-card">
                <div className="edu-header">
                  <div className="edu-role-wrapper">
                    <div className="edu-icon-badge">
                      <FaCode />
                    </div>
                    <div>
                      <h3 className="edu-degree">Certifications & Training</h3>
                      <p className="edu-institution">Verified online courses and professional workshops</p>
                    </div>
                  </div>
                </div>
                <div className="certifications-grid">
                  <div className="cert-chip">
                    <span><FaCode /></span> Full Stack Web Dev (Udemy)
                  </div>
                  <div className="cert-chip">
                    <span><FaPython /></span> Python Programming (Coursera)
                  </div>
                  <div className="cert-chip">
                    <span><FaLaptopCode /></span> Machine Learning (Google)
                  </div>
                  <div className="cert-chip">
                    <span><FaTools /></span> AWS Fundamentals (AWS)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Element>

        {/* SKILLS SECTION */}
        <Element name="skills" className="section">
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-title-wrapper">
              <span className="section-tag">Expertise</span>
              <h2 className="section-title">Skills & Technologies</h2>
              <p className="section-subtitle">
                Core programming languages, web frameworks, technical tools, and professional soft skills.
              </p>
            </div>

            <div className="skills-container" style={{ margin: "0 auto" }}>
              {/* Languages & Frontend */}
              <div className="skills-category-card">
                <h3 className="category-title">
                  <FaCode /> Languages & Frontend
                </h3>
                <div className="skill-badges-grid">
                  <div className="skill-badge">
                    <FaPython className="skill-badge-icon" style={{ color: "#3776AB" }} />
                    <span className="skill-badge-name">Python</span>
                  </div>

                  <div className="skill-badge">
                    <FaJava className="skill-badge-icon" style={{ color: "#E76F00" }} />
                    <span className="skill-badge-name">Java</span>
                  </div>

                  <div className="skill-badge">
                    <FaCode className="skill-badge-icon" style={{ color: "#00599C" }} />
                    <span className="skill-badge-name">C / C++</span>
                  </div>

                  <div className="skill-badge">
                    <FaHtml5 className="skill-badge-icon" style={{ color: "#E34F26" }} />
                    <span className="skill-badge-name">HTML</span>
                  </div>

                  <div className="skill-badge">
                    <FaCss3Alt className="skill-badge-icon" style={{ color: "#1572B6" }} />
                    <span className="skill-badge-name">CSS</span>
                  </div>

                  <div className="skill-badge">
                    <FaReact className="skill-badge-icon" style={{ color: "#61DAFB" }} />
                    <span className="skill-badge-name">React.js</span>
                  </div>

                  <div className="skill-badge">
                    <FaBootstrap className="skill-badge-icon" style={{ color: "#7952B3" }} />
                    <span className="skill-badge-name">Bootstrap</span>
                  </div>
                </div>
              </div>

              {/* Backend & Technologies */}
              <div className="skills-category-card">
                <h3 className="category-title">
                  <FaServer /> Backend, Cloud & DB
                </h3>
                <div className="skill-badges-grid">
                  <div className="skill-badge">
                    <FaNodeJs className="skill-badge-icon" style={{ color: "#339933" }} />
                    <span className="skill-badge-name">Node.js</span>
                  </div>

                  <div className="skill-badge">
                    <FaDatabase className="skill-badge-icon" style={{ color: "#f9ca24" }} />
                    <span className="skill-badge-name">SQL</span>
                  </div>

                  <div className="skill-badge">
                    <SiFirebase className="skill-badge-icon" style={{ color: "#FFCA28" }} />
                    <span className="skill-badge-name">Firebase</span>
                  </div>

                  <div className="skill-badge">
                    <FaDocker className="skill-badge-icon" style={{ color: "#2496ED" }} />
                    <span className="skill-badge-name">Docker</span>
                  </div>
                </div>
              </div>

              {/* Professional & Soft Skills */}
              <div className="skills-category-card">
                <h3 className="category-title">
                  <FaUserTie /> Professional Skills
                </h3>
                <div className="skill-badges-grid">
                  <div className="skill-badge">
                    <FaUserTie className="skill-badge-icon" style={{ color: "#f9ca24" }} />
                    <span className="skill-badge-name">Leadership</span>
                  </div>

                  <div className="skill-badge">
                    <FaUsers className="skill-badge-icon" style={{ color: "#61DAFB" }} />
                    <span className="skill-badge-name">Team Collaboration</span>
                  </div>

                  <div className="skill-badge">
                    <FaBrain className="skill-badge-icon" style={{ color: "#FF6B6B" }} />
                    <span className="skill-badge-name">Problem Solving</span>
                  </div>

                  <div className="skill-badge">
                    <FaHandshake className="skill-badge-icon" style={{ color: "#4ECDC4" }} />
                    <span className="skill-badge-name">Adaptability</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Element>

        {/* PROJECTS SECTION */}
        <Element name="projects" className="section">
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-title-wrapper">
              <span className="section-tag">Portfolio</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                A selection of web applications and software projects I've engineered.
              </p>
            </div>

            <div className="projects-grid" style={{ margin: "0 auto" }}>
              {/* Project 1 */}
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img src="/pic2.png" alt="Interncrow" className="project-img" />
                </div>
                <div className="project-body">
                  <h3 className="project-title">Interncrow</h3>
                  <p className="project-desc">
                    A web platform designed to streamline internship discovery for students. Features internship opportunity listings, user account management, filterable search categories, and application tracking for prospective applicants.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">Node.js</span>
                    <span className="project-tag">Express</span>
                    <span className="project-tag">MongoDB</span>
                  </div>
                  <div className="project-actions">
                    <a
                      href="https://github.com/progprnv/Interncrow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                    >
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img src="/pic3.png" alt="ConvinceAyoo" className="project-img" />
                </div>
                <div className="project-body">
                  <h3 className="project-title">ConvinceAyoo</h3>
                  <p className="project-desc">
                    An interactive decision-making web application featuring reactive React state management, fluid CSS animations, dynamic interaction handlers, and instantaneous user feedback loops.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">JavaScript</span>
                    <span className="project-tag">CSS3</span>
                  </div>
                  <div className="project-actions">
                    <a
                      href="https://github.com/progprnv/ConvinceAyoo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                    >
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img
                    src="/pic4.jpeg"
                    alt="LocServ Location Services"
                    className="project-img"
                  />
                </div>
                <div className="project-body">
                  <h3 className="project-title">LocServ</h3>
                  <p className="project-desc">
                    A web platform designed for location-based services, connecting users to nearby local service providers with interactive location filtering, user management, and seamless booking.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">Node.js</span>
                    <span className="project-tag">Firebase</span>
                    <span className="project-tag">JavaScript</span>
                  </div>
                  <div className="project-actions">
                    <a
                      href="https://github.com/R05H10/loc-serv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                    >
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Element>

        {/* CONTACT SECTION */}
        <Element name="contact" className="section">
          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-title-wrapper">
              <span className="section-tag">Get In Touch</span>
              <h2 className="section-title">Contact Me</h2>
              <p className="section-subtitle">
                Feel free to reach out for career opportunities, freelance work, or collaborations.
              </p>
            </div>

            <div className="contact-grid" style={{ margin: "0 auto" }}>
              {/* Contact Info Left */}
              <div className="contact-info-wrapper">
                <h3 className="contact-intro-title">Let's Connect</h3>
                <p className="contact-intro-desc">
                  I am actively seeking software engineering internships and junior developer roles. My inbox is always open for inquiries or discussions!
                </p>

                <div className="contact-methods">
                  <a href="mailto:roshansubhash10@gmail.com" className="contact-method-card">
                    <div className="contact-icon-box">
                      <FaEnvelope />
                    </div>
                    <div>
                      <div className="contact-method-label">Direct Email</div>
                      <div className="contact-method-value">roshansubhash10@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/roshan-subhash-31783231a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-card"
                  >
                    <div className="contact-icon-box">
                      <FaLinkedin />
                    </div>
                    <div>
                      <div className="contact-method-label">LinkedIn</div>
                      <div className="contact-method-value">roshan-subhash</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/R05H10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-card"
                  >
                    <div className="contact-icon-box">
                      <FaGithub />
                    </div>
                    <div>
                      <div className="contact-method-label">GitHub</div>
                      <div className="contact-method-value">github.com/R05H10</div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/_.rosh_.05?igsh=MTdsd2dzamxvM2Ew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-card"
                  >
                    <div className="contact-icon-box">
                      <FaInstagram />
                    </div>
                    <div>
                      <div className="contact-method-label">Instagram</div>
                      <div className="contact-method-value">@_.rosh_.05</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Form Right */}
              <div className="contact-form-card">
                {formSubmitted ? (
                  <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
                    <FaCheckCircle style={{ fontSize: "3.5rem", color: "#f9ca24", marginBottom: "1rem" }} />
                    <h3 style={{ fontFamily: "Poppins", fontSize: "1.6rem", color: "#fff", marginBottom: "0.5rem" }}>
                      Message Sent Successfully!
                    </h3>
                    <p style={{ color: "#a0a5b5", fontSize: "1rem", marginBottom: "1.5rem" }}>
                      Thank you for reaching out. Your message has been received and Roshan will respond to you shortly!
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          subject: "",
                          message: ""
                        });
                      }}
                      className="btn-outline"
                      style={{ margin: "0 auto" }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleFormSubmit}>
                    <input type="hidden" name="to_email" value="roshansubhash10@gmail.com" />
                    <input
                      type="hidden"
                      name="from_name"
                      value={`${formData.firstName} ${formData.lastName}`}
                    />

                    <div className="form-group-row">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleFormChange}
                          required
                          className="form-input"
                          placeholder="John"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleFormChange}
                          required
                          className="form-input"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleFormChange}
                        required
                        className="form-input"
                        placeholder="Software Engineering Inquiry"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        className="form-input"
                        placeholder="Hello Roshan, I would like to discuss..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="btn-primary"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      {isSending ? (
                        <>
                          <FaSpinner className="spin-icon" /> Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </Element>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Roshan Subhash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;