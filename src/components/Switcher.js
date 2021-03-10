import "./styles/Switcher.css";
import { useState, useEffect } from "react";

function Switcher({ words, colour, autoplay = true, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const optionCount = words.length;
  const [word, setWord] = useState(words[0]);

  useEffect(() => {
    if (autoplay) {
      let wordInterval = setInterval(
        () => setIndex((index) => index + 1),
        interval
      );
      return () => clearInterval(wordInterval);
    }
  }, [autoplay,interval]);

  useEffect(() => {
    if (index >= 0 && index < optionCount) {
      setWord(words[index]);
    } else if (index === optionCount) {
      setWord(words[0]);
      setIndex(0);
    } else if (index < 0) {
      setWord(words[optionCount - 1]);
      setIndex(optionCount - 1);
    }
  }, [index, optionCount,setWord,words]);

  return (
    <div className="SwitchContainer">
      <button
        className={["PreviousArrow", "Arrow"].join(" ")}
        style={{ color: colour }}
        onClick={() => setIndex((index) => index - 1)}
      />
      <div className="SwitchWord">{word}</div>
      <button
        className={["NextArrow", "Arrow"].join(" ")}
        style={{ color: colour }}
        onClick={() => setIndex((index) => index + 1)}
      />
    </div>
  );
}

export default Switcher;
