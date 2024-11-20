import React from 'react';
import './Home.css';
import image from '/homescreen_image1.png';
import brand from '/public/brand.png';
import tech from '/public/tech.png';
import channel from '/public/channel.png';
import growth from '/public/growth.png';
import approachImage from '/public/approach.png';
import '@fortawesome/fontawesome-free/css/all.css';


// ImageComponent
const ImageComponent = ({ height, width, src = '', style = {} }) => {
  const defaultStyles = {
    borderRadius: '10px',
    margin: '5px',
    height,
    width,
  };

  const mergedStyles = { ...defaultStyles, ...style };

  return <img src={src} height={height} width={width} style={mergedStyles} />;
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="homeIntroContainer">
        <div className="homeDescriptionContainer">
          <div className="homeHeading">Ideas Into Brands</div>
          <p>
            A curated network where India's brightest minds collaborate to ideate, connect, and
            launch groundbreaking ventures together.
          </p>
          <button className="homeLearnMore">
            Learn More <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div className="homeImageContainer">
          <img src={image} alt="Hero" />
        </div>
      </div>

      {/* Brands Section */}
      <div className="homeBrandsContainer">
        <div className="homeBrandsTitle">Brands who trust us</div>
        <div className="homeBrandsImagesContainer">
          <img src="/goodbug.png" alt="Goodbug" style={{ height: '214.89px', width: '341.28px' }} />
          <img src="/smartsters.png" alt="Smartsters" style={{ height: '219.61px', width: '387.46px' }} />
          <img src="/bie.png" alt="Bie" style={{ height: '219.28px', width: '387.46px' }} />
          <img src="/neude.png" alt="Neude" style={{ height: '214.89px', width: '341.28px' }} />
          <img src="/sorrentina.png" alt="Sorrentina" style={{ height: '216.19px', width: '351.42px' }} />
          <img src="/anaar.png" alt="Anaar" style={{ height: '219.41px', width: '380.7px' }} />
        </div>
      </div>

      {/* Approach Section */}
      <div className="homeApproachOuterContainer">
        <div className="homeApproachInnerContainer">
          <div className="homeApproachTitle">Approach</div>
          <p>
            We help turn passionate entrepreneurs into successful brand owners. With our expert
            team and data-driven insights, we build profitable brands in fashion, food, and
            lifestyle. Our community brings together India's top minds to create tomorrow's
            leading brands that resonate with modern Indian consumers.
          </p>
          <img src="/approach.png" alt="Approach" />
        </div>
      </div>


      {/* Why Choose Us Section */}
      <div className="homeChooseUsContainer">
        <div className="homeChooseUsTitle">Why choose us?</div>
        <div className="homePointItemsContainer">
          <div className="homePointItem">
            <div className="homePointItemTitle">
              <div className="homeTitleNum">01</div>
              <div className="homeTitleHeading">Deep-Rooted Culture</div>
            </div>
            <p>
              In the start-up hustle, what often gets missed is the foundation on which an idea
              grows. Think9 is built with a culture of deep creation - rooted in grounded insight
              and passionate belief.
            </p>
          </div>
          <div className="homePointItem">
            <div className="homePointItemTitle">
              <div className="homeTitleNum">02</div>
              <div className="homeTitleHeading">Brand Strategy</div>
            </div>
            <p>
              Our approach is filtered through a sophisticated brand lens, detailed meticulously
              end-to-end, supported by technology and data stacks.
            </p>
          </div>
          <div className="homePointItem">
            <div className="homePointItemTitle">
              <div className="homeTitleNum">03</div>
              <div className="homeTitleHeading">Expert Team</div>
            </div>
            <p>
              We combine experienced digital marketers and content creators with business leaders
              who have accomplished building large businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Glimpse Section */}
      <div className="homeGlimpseContainer">
        <div className='homeGlimpseImages'>
          <img src="/brand.png" alt="Brand" style={{ height: '271px', width: '298px', marginTop: '137px' }} />
          <img src="/tech.png" alt="Tech" style={{ height: '345px', width: '358px', marginTop: '50px' }} />
          <img src="/channel.png" alt="Channel" style={{ height: '249px', width: '396px', marginTop: '213px' }} />
          <img src="/growth.png" alt="Growth" style={{ height: '267px', width: '350px', marginTop: '80px' }} />
        </div>
        <div className='homeGlimpseDesc'>Glimpse of the Co-Creation Playbook</div>
      </div>
    </>
  );
};

export default Home;
