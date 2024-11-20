import React from 'react'
import ImageComponent from './ImageComponent'
import brands from './brandConfig'
import './Brands.css'

const Brands = () => {
  return (
    <>
        <div className='brandsContainer'>
            <div className="title">Brands who trust us</div>
            <div className='imagesContainer'>
                <div className='brandsImages'>
                    <ImageComponent src={brands.goodbug} height={'214.89px'} width={'341.28px'}/>
                    <ImageComponent src={brands.smartsters} height={'219.61px'} width={'387.46px'}/>
                    <br />
                    <ImageComponent src={brands.bie} height={'219.28px'} width={'387.46px'}/>
                    <ImageComponent src={brands.neude} height={'214.89px'} width={'341.28px'}/>
                    <br />
                    <ImageComponent src={brands.sorrentina} height={'216.19px'} width={'351.42px'}/>
                    <ImageComponent src={brands.anaar} height={'219.41px'} width={'380.7px'}/>
                </div>

            </div>
        </div>
    </>
  )
}

export default Brands