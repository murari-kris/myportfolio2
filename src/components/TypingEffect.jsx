import { useEffect, useState } from "react";

const TypingEffect = () => {
  const words = ["Java Developer", "Full Stack Developer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1500);
    }
  }, [charIndex, wordIndex]);

  return (
    <span>
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypingEffect;
