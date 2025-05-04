import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <>
      <div className="bubbleContainer">
        <div className="bubble">
          {" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "We produce food for Mice",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "We produce food for Hamsters",
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <img src="/man.png" alt="" />
      </div>
    </>
  );
};

export default Speech;
