import React from 'react'

const ImageComponent = ({height, width, src='', style = {}}) => {

  const defaultStyles = {
    borderRadius: '10px',
    margin: '5px',
    height: height,
    width: width,
  };

  const mergedStyles = { ...defaultStyles, ...style };

  return (
    <>
        <img src={src} height={height} width={width} style={mergedStyles} />
        
    </>
  )
}

export default ImageComponent