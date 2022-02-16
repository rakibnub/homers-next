import React, {CSSProperties, FC} from 'react';

export type PComponentType = {
  text?: string;
  color?: string;
  styleProps?: CSSProperties;
  className?: string;
};

const PComponent: FC<PComponentType> = ({
  text,
  color,
  styleProps,
  className,
}) => {
  return (
    <p className={className} style={{fontSize: '1em',lineHeight: '1.5625em', color: color || '#666666', ...styleProps}}>
        {text}
    </p>
  );
};

export default PComponent;
