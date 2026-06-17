import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa"; 
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
  
  // State for form submission status
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: 180,
        wireframes: false,
        background: "transparent",
      },
    });

    const ground = Matter.Bodies.rectangle(window.innerWidth / 2, 190, window.innerWidth * 2, 20, { isStatic: true });
    const wallLeft = Matter.Bodies.rectangle(-10, 90, 20, 200, { isStatic: true });
    const wallRight = Matter.Bodies.rectangle(window.innerWidth + 10, 90, 20, 200, { isStatic: true });

    const stickerImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
    const stickerBodies = stickerImages.map((img, i) => {
      return Matter.Bodies.rectangle(200 + i * 150, 50, 60, 60, {
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

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      Matter.Composite.clear(world, false);
      if (render.canvas) render.canvas.remove();
    };
  }, []);

  // Form Submission Handler
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    // Injects your unique Web3Forms Access Key
    formData.append("access_key", "fc59439b-599b-46be-bc51-663b7a420958");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset(); // Clears form fields
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
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
            
            <form onSubmit={onSubmit} className="contact-form-main">
              <div className="input-field-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="input-field-group">
                <label>Email</label>
                {/* FIXED: Changed name="name" to name="email" */}
                <input type="email" name="email" placeholder="email@example.com" required />
              </div>
              <div className="input-field-group">
                <label>Message</label>
                <textarea name="message" placeholder="How can I help you?" rows="4" required></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="mint-submit-button">
                {isSubmitting ? "Sending..." : "Send Message"} <FaPaperPlane />
              </button>
            </form>

            {/* Status Message Display */}
            {result && <p className="form-status-message">{result}</p>}
          </div>
        </div>
      </div>

      {/* PHYSICS FOOTER */}
      <div className="physics-container" ref={sceneRef}></div>
    </section>
  );
});

export default Contact;