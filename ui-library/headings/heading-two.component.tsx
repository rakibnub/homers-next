import React, {FC} from 'react';
import {HeadingComponentType} from '@lib/index';

const HeadingTwoComponent: FC<HeadingComponentType> = ({
  color,
  text,
  styleProps,
}) => {
  return (
    <h2 style={{fontSize: '2.25em', lineHeight:"1.4", color: color || '#14182D', ...styleProps}}>
      {text}
    </h2>
  );
};

export default HeadingTwoComponent;
