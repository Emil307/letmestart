import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  progress: number,
  height?: string,
  width?: string,
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height, width }) => {
  const [activeProgress, setActiveProgress] = useState(0);
  const [visor, setVisor] = useState(0);
  
  useEffect(() => {
      const interval = setInterval(() => {
        setActiveProgress(activeProgress + 1);
        if (progress !== activeProgress) {
          setVisor(visor + 1)
        }
      }, 5);

      return () => clearInterval(interval);
  }, [visor]);

  return (
    <div style={{width: width, height: height, background: 'rgba(0, 0, 0, 0.05)', borderRadius: '10px'}}>
      <div style={{width: `${activeProgress}%`, height: height, background: '#000', borderRadius: '10px'}}></div>
    </div>
  )
}

export default ProgressBar;