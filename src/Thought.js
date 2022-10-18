import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);
    return () => {
      clearTimeout(timeout);
    };
  }, [thought, removeThought]);

  return (
    <li className="Thought" key={props.id}>
      <div className="text">{thought.text}</div>
      <CountdownCircleTimer className="remove-button" isPlaying duration={15} colors={["#004777", "#F7B801", "#A30000", "#A30000"]} colorsTime={[7, 5, 2, 0]} size={30} strokeWidth={4}></CountdownCircleTimer>
      <button aria-label="Remove thought" className="remove-button" onClick={handleRemoveClick}>
        &times;
      </button>
    </li>
  );
}
