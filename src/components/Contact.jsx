import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { FaLinkedin, FaGithub, FaInstagram, FaPaperPlane, FaCheckCircle } from "react-icons/fa6";
import contactAvatar from "../assets/my.jpg"; 
import "./Contact.css";

// Sticker Imports
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";

const Contact = React.forwardRef((props, ref) => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  
  // Form submission status states
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const sceneWidth = sceneRef.current.clientWidth;
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneWidth,
        height: 180,
        wireframes: false,
        background: "transparent",
      },
    });

    const ground = Matter.Bodies.rectangle(sceneWidth / 2, 190, sceneWidth * 2, 20, { isStatic: true });
    const wallLeft = Matter.Bodies.rectangle(-10, 90, 20, 200, { isStatic: true });
    const wallRight = Matter.Bodies.rectangle(sceneWidth + 10, 90, 20, 200, { isStatic: true });

    const stickerImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
    const stickerBodies = stickerImages.map((img, i) => {
      return Matter.Bodies.rectangle(60 + i * (sceneWidth / 9), 50, 60, 60, {
        restitution: 0.6,
        friction: 0.1,
        render: { sprite: { texture: img, xScale: 0.35, yScale: 0.35 } }
      });
    });

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });

    Matter.Composite.add(world, [ground, wallLeft, wallRight, ...stickerBodies, mouseConstraint]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Handle responsiveness for the Matter canvas boundaries
    const handleResize = () => {
      if (!sceneRef.current || !render.canvas) return;
      const newWidth = sceneRef.current.clientWidth;
      
      render.bounds.max.x = newWidth;
      render.options.width = newWidth;
      render.canvas.width = newWidth;
      
      Matter.Body.setPosition(ground, { x: newWidth / 2, y: 190 });
      Matter.Body.setPosition(wallRight, { x: newWidth + 10, y: 90 });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      Matter.Composite.clear(world, false);
      if (render.canvas) render.canvas.remove();
    };
  }, []);

  // Form Submission Handler using Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(e.target);
    
    // Web3Forms Public Access Key
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        e.target.reset(); // Reset form fields on success
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section ref={ref} className="contact-section-wrapper">
      <div className="split-contact-container">
        
        {/* LEFT SIDE: AVATAR & SOCIALS */}
        <div className="contact-left-panel">
          <div className="avatar-wrapper">
            <div className="avatar-glow"></div>
            <img src={contactAvatar} alt="Profile" className="contact-avatar" />
          </div>
          
          <div className="social-icon-bar">
            <a href="https://github.com/murari-kris" target="_blank" rel="noreferrer" className="social-icon-link github"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/javadeveloper-krishna-murari/" target="_blank" rel="noreferrer" className="social-icon-link linkedin"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-link instagram"><FaInstagram /></a>
          </div>

          <p className="contact-message-text">
            Let's build something <span className="mint-text">great</span>.
          </p>
        </div>

        {/* RIGHT SIDE: CONTACT FORM */}
        <div className="contact-right-panel">
          <div className="form-card-glass">
            <header className="form-intro">
              <h2>Get In Touch</h2>
              <p>I'm open to new opportunities. Let's talk!</p>
            </header>
            
            {formStatus === "success" ? (
              <div className="form-success-state">
                <FaCheckCircle className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
                <button onClick={() => setFormStatus("idle")} className="mint-submit-button reset-btn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-main">
                {/* Anti-spam honey pot field */}
                <input type="checkbox" name="botcheck" className="hidden-botcheck" style={{ display: "none" }} />

                <div className="input-field-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="input-field-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="email@example.com" required />
                </div>
                <div className="input-field-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="How can I help you?" rows="4" required></textarea>
                </div>
                
                <button type="submit" className="mint-submit-button" disabled={formStatus === "sending"}>
                  {formStatus === "sending" ? "Sending..." : "Send Message"} 
                  {formStatus !== "sending" && <FaPaperPlane />}
                </button>

                {formStatus === "error" && (
                  <p className="form-error-message">Something went wrong. Please try again or email directly.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* PHYSICS FOOTER */}
      <div className="physics-container" ref={sceneRef}></div>
    </section>
  );
});

export default Contact;