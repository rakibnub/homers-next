import React, {CSSProperties, FC} from 'react';

export type HeadingComponentType = {
  text?: string;
  color?: string;
  dangerouslySetInnerHtml?: string;
  styleProps?: CSSProperties;
};

const HeadingOneComponent: FC<HeadingComponentType> = ({
  text,
  color,
  dangerouslySetInnerHtml,
  styleProps,
}) => {
  return (
      <h1 style={{fontSize: '2.625em',lineHeight: 1.2, color: color || 'white', ...styleProps}}>
        {text}
      </h1>
  );
};

export default HeadingOneComponent;
