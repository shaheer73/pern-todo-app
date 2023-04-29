import React from 'react';

const ProgressBar = ({ progress }) => {
  const colors = [
    '#F97B22',
    '#7C9070',
    '#0A4D68',
    '#A4D0A4'
  ]

  const randomColor = colors[ Math.floor(Math.random() * colors.length)];

  return (
    <div className='outer-bar'>
      <div 
        className='inner-bar'
        style={{ width: `${progress}%`, backgroundColor: randomColor}}
      >
      </div>
    </div>
  )
}

export default ProgressBar