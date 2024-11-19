import React from 'react'
import approach from '../../../assets/approach.png'
import './Approach.css'

const Approach = () => {
  return (
    <>
        <div className='outerContainer'>
            <div className='innerContainer'>
                <div className='title'>Approach</div>
                <p>We help turn passionate entrepreneurs into successful brand owners. With our expert team and data-driven insights, we build profitable brands in fashion, food, and lifestyle. Our community brings together India's top minds to create tomorrow's leading brands that resonate with modern Indian consumers.</p>
                <img src={approach} alt="" />
            </div>
        </div>
    </>
  )
}

export default Approach