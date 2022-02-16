import { H1, P } from '@lib/index';
import { Grid } from '@mui/material';
import Image from 'next/image';
import React, { FC, ReactNode } from 'react';
import styles from './rtl.module.scss';

export type RtlComponentType = {
  imageUrl?: string;
  heading?: string;
  pText?: string;
  pTextColor?: string;
  preserveRTL?: boolean;
  headingColor?: string;
  headingAccentColor?: string;
  backgroundColor?: string;
  bottomBarPlacement?: string;
  isOnly?: boolean;
  oneSpan?: number;
  twoSpan?: number;
  children?: ReactNode;
};

// preserveRTL means text on left, and image on right
const RtlComponent: FC<RtlComponentType> = ({
  imageUrl,
  heading,
  pText,
  preserveRTL,
  headingColor,
  headingAccentColor,
  backgroundColor,
  pTextColor,
  bottomBarPlacement,
  isOnly,
  oneSpan = 6,
  twoSpan = 6,
  children,
}) => {
  return (
    <Grid
      container
      spacing={2}
      className={styles.mainRtlComponent}
      justifyContent="center"
      alignItems="center"
      style={{
        padding: '50px 12.5vw',
        backgroundColor: backgroundColor || 'white',
      }}>
      <Grid item xs={isOnly ? 12 : oneSpan} order={{xs: preserveRTL ? 1 : 2}}>
        <H1
          color={headingColor}
          dangerouslySetInnerHtml={heading}
        />
        <P
          color={pTextColor}
          styleProps={{
            textAlign: bottomBarPlacement === 'center' ? 'center' : 'left',
          }}
        />
        {children}
      </Grid>
      {imageUrl && !isOnly ? (
        <Grid item xs={twoSpan} order={{xs: !preserveRTL ? 1 : 2}}>
          <Image
            alt="window-code"
            src={imageUrl}
            width="700px"
            height="500px"
          />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default RtlComponent;
