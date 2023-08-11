import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  progress: number,
  height: string,
  width: string,
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height, width }) => {
  const [activeProgress, setActiveProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress !== activeProgress) {
        setActiveProgress(activeProgress + 1);
      }
    }, 5);

    return () => clearInterval(interval);
  }, [activeProgress]);

  return (
    <div style={{width: width, height: height, background: 'rgba(0, 0, 0, 0.05)', borderRadius: '10px'}}>
      <div style={{width: `${activeProgress - 1}%`, height: height, background: 'linear-gradient(112.15deg, #3CEEB5 -30.82%, #051E73 173.73%)', borderRadius: '10px'}}></div>
    </div>
  )
}

export default ProgressBar;