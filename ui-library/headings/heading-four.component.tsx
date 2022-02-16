import React, {FC} from 'react';
import {HeadingComponentType} from '@lib/index';

const HeadingFourComponent: FC<HeadingComponentType> = ({
  color,
  text,
  styleProps,
}) => {
  return (
    <h4 style={{fontSize: '1.25em', lineHeight:"1.4", color: color || '#14182D', ...styleProps}}>
      {text}
    </h4>
  );
};

export default HeadingFourComponent;
