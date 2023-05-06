import React from 'react';

interface ProgressBarProps {
  progress?: number,
  height?: string,
  width?: string,
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height, width }) => {
  return (
    <div style={{width: width, height: height, background: 'rgba(0, 0, 0, 0.05)', borderRadius: '10px'}}>
      <div style={{width: `${progress}%`, height: height, background: '#000', borderRadius: '10px'}}></div>
    </div>
  )
}

export default ProgressBar;