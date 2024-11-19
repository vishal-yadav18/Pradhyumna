import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
  return (
    <>
      <div className="cuInnerContainer">
        <div className="cuTitle">Why choose us?</div>

        <div className="pointItemsContainer">
          {/* Point Item 1 */}
          <div className="pointItems">
            <div className="pointItemsTitle">
              <div className="titleNum">01</div>
              <div className="titleHeading">Deep-Rooted Culture</div>
            </div>
            <p>
              In the start-up hustle, what often gets missed is the foundation on
              which an idea grows. Think9 is built with a culture of deep creation -
              rooted in grounded insight and passionate belief.
            </p>
          </div>

          {/* Point Item 2 */}
          <div className="pointItems">
            <div className="pointItemsTitle">
              <div className="titleNum">02</div>
              <div className="titleHeading">Brand Strategy</div>
            </div>
            <p>
            Our approach is filtered through a sophisticated brand lens, detailed meticulously end-to-end, supported by technology and data stacks.
            </p>
          </div>

          {/* Point Item 3 */}
          <div className="pointItems">
            <div className="pointItemsTitle">
              <div className="titleNum">03</div>
              <div className="titleHeading">Expert Team</div>
            </div>
            <p>
              We combine experienced digital marketers and content creators with
              business leaders who have accomplished building large businesses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
