import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <>
      <div className="bubbleContainer">
        <div className="bubble">
          {" "}
          <TypeAnimation
            sequence={[
              1000,
              // Same substring at the start will only be typed out once, initially
              "Specialised in frontend,Mern-Stack, React.js, backend development for scalable web apps",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "I have made a variety of full-Stack Applications",
            ]}
            wrapper="span"
            speed={40}
            deletionSpeed={60}
            repeat={Infinity}
          />
        </div>
        <img src="/man.png" alt="" />
      </div>
    </>
  );
};

export default Speech;
