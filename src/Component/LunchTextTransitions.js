import React                       from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Time is an illusion, lunchtime doubly so.",
  "Order Now !",
  "Enjoy Your Meal :) ",
];

const LunchTextTransitions = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 4 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
    </h1>
  );
};
export default LunchTextTransitions;