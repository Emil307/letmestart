import React from 'react';

interface TitleProps {
  children: React.ReactNode,
  fontSize: number,
  fontWeight?: number,
  color?: string;
}

const Title: React.FC<TitleProps> = ({ children, fontSize, fontWeight, color }) => {
  return (
    <h2 style={{fontFamily: "Roboto, sans-serif", fontWeight: fontWeight, fontSize: `${fontSize}px`, lineHeight: `${fontSize * 1.2}px`, color: color }}>{children}</h2>
  )
}

export default Title;