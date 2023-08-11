import React from 'react';
import styled from 'styled-components';

const BackArrowStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  border: 1px #ccc solid;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  transition: all .2s ease;
  &:hover {
    transform: translateY(4px);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
    background: rgba(0, 0, 0, 0.05);
  }
`

interface BackArrowProps {
  href: string,
}

const BackArrow: React.FC<BackArrowProps> = ({ href }) => {
  return (
    <BackArrowStyled href={href}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="30" height="30" fill="url(#pattern0)"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_120_46" transform="scale(0.00416667)"/>
          </pattern>
          <image id="image0_120_46" width="240" height="240" xlinkHref="data:image/png;base64,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"/>
        </defs>
      </svg>
    </BackArrowStyled>
  )
}

export default BackArrow