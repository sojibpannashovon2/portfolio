import "./hero.css" ;

const Hero =()=>{
    return(
        <>
          <div className="hero ">
            <div className="hSection left">
                  <h1 className="hTitle">
                    Hey There,
                    <br />
                    <span>
                        Md Arifur Rahman !
                    </span>
                  </h1>
                  <div className="awards">
                        <h2>Top Rated Developer</h2>
                        <p>Skilled full stack developer crafting solutions.</p>
                        <div className="awardList">
                            <img style={{height:"45px", width:"45px"}} src="./award1.png" alt=""/>
                            <img style={{height:"45px", width:"45px"}}src="./award2.png" alt=""/>
                            <img style={{height:"45px", width:"45px"}} src="./award3.png" alt=""/>
                        </div>
                  </div>
            </div>
            <div className="hSection right"></div>
          </div>
        </>
    )
}

export default Hero;