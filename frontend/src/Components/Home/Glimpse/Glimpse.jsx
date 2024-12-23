import React from 'react'
import brand from '../../../../public/brand.png'
// import tech from '../../../assets/tech.png'
// import channel from '../../../assets/channel.png'
// import growth from '../../../assets/growth.png'
import './Glimpse.css'
import ImageComponent from '../Brands/ImageComponent'

const Glimpse = () => {
  return (
    <>
        <div className='glimpseContainer'>
            <ImageComponent height={'271px'} width={'298px'} src={'./brand.png'} style={{ marginTop: '137px' }} />
            <ImageComponent height={'345px'} width={'358px'} src={'./tech.png'} style={{ marginTop: '50px' }} />
            <ImageComponent height={'249px'} width={'396px'} src={'./channel.png'} style={{marginTop: '213px'}} />
            <ImageComponent height={'267px'} width={'350px'} src={'./growth.png'} style={{marginTop: '80px'}} />
        </div>
    </>
  )
}

export default Glimpse