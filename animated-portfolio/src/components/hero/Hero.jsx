import "./hero.css";
import Speech from "./Speech";

const Hero = () => {
  return (
    <>
      <div className="hero ">
        <div className="hSection left">
          {/* Title */}
          <h1 className="hTitle">
            Hey There,
            <br />
            <span>Md Arifur Rahman !</span>
          </h1>

          {/* Awards */}
          <div className="awards">
            <h2>Top Rated Developer</h2>
            <p>Skilled full stack developer crafting solutions.</p>
            <div className="awardList">
              <img
                style={{ height: "45px", width: "45px" }}
                src="./award1.png"
                alt=""
              />
              <img
                style={{ height: "45px", width: "45px" }}
                src="./award2.png"
                alt=""
              />
              <img
                style={{ height: "45px", width: "45px" }}
                src="./award3.png"
                alt=""
              />
            </div>
          </div>

          {/* Scroll SVG */}
          <a href="#services" className="scroll">
            <svg
              width="50px"
              height="50px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 79.37 122.88"
              xmlSpace="preserve"
              style={{ enableBackground: "new 0 0 79.37 122.88" }} // Converted to object
            >
              <g>
                <path d="M50.2,121.63c6.71-1.85,12.72-5.44,17.51-10.23c7.19-7.19,11.65-17.11,11.65-28.03V39.68c0-10.92-4.46-20.84-11.65-28.03C60.52,4.46,50.6,0,39.68,0C28.77,0,18.84,4.46,11.65,11.65C4.46,18.84,0,28.77,0,39.68v43.68c0,10.92,4.46,20.84,11.65,28.03c5.59,5.59,12.82,9.53,20.89,11.01C37.42,123.3,45.7,122.87,50.2,121.63L50.2,121.63L50.2,121.63z M39.23,92.06c4.15,0,7.55-3.4,7.55-7.55v-7.78c0-4.15-3.4-7.55-7.55-7.55c-4.15,0-7.55,3.4-7.55,7.55v7.78C31.68,88.66,35.07,92.06,39.23,92.06L39.23,92.06z M61.08,104.77c-5.49,5.49-13.07,8.91-21.4,8.91c-8.33,0-15.9-3.41-21.4-8.91c-5.49-5.49-8.91-13.07-8.91-21.4V39.68c0-8.33,3.41-15.9,8.91-21.4c5.49-5.49,13.07-8.91,21.4-8.91c8.33,0,15.9,3.41,21.4,8.91c5.49,5.49,8.91,13.07,8.91,21.4v43.68C69.99,91.7,66.58,99.27,61.08,104.77L61.08,104.77L61.08,104.77z" />
              </g>
            </svg>
          </a>
        </div>
        <div className="hSection right">
          {/* Follow */}
          <div className="follow">
            <a href="">
              <img src="/instagram.png" alt="" />
            </a>
            <a href="">
              <img src="/facebook.png" alt="" />
            </a>
            <a href="">
              <img src="/youtube.png" alt="" />
            </a>

            <div className="followTextContainer">
              <div className="followText">FOLLOW ME</div>
            </div>
          </div>

          {/* speach bubble */}

          <Speech />
          {/* Certificate */}

          <div className="certificate">
            <img src="/certificate.png" alt="" />
            LMA CERTIFICATE <br />
            FULLSTACK DEVELOPER
          </div>

          {/* Contact */}
          <a href="/#contact" className="contact">
            <div className="contactButton">
              <svg viewBox="0 0 200 200" width="150" height="150">
                <circle cx="100" cy="100" r="90" fill="pink" />
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
                <text className="circleText">
                  <textPath href="#innerCirclePath">Hire Now •</textPath>
                </text>
                <text className="circleText">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>
              </svg>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div className="bg">
          {/* 3d structure */}
          <div className="hImg">
            <img src="./hero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
