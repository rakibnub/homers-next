import React, {CSSProperties, FC, ReactNode} from 'react';
import {Button, Tooltip} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

type Variant = 'contained' | 'outlined' | 'text';
type FormType = 'button' | 'submit';
type Color =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export type ButtonComponentType = {
  buttonText: string;
  onClickHandler: () => void;
  tooltipText?: string;
  variant?: Variant;
  className?: string;
  iconOnStart?: ReactNode;
  iconOnEnd?: ReactNode;
  styleProps?: CSSProperties;
  restProps?: any;
  isLoading?: boolean;
  background?:string;
  formType?: FormType;
  color?: Color;
};

const ButtonComponent: FC<ButtonComponentType> = ({
  buttonText,
  tooltipText = '',
  className = '',
  variant = 'contained',
  onClickHandler,
  formType = 'button',
  isLoading,
  iconOnStart,
  background,
  iconOnEnd,
  styleProps,
  color = 'primary',
  ...restProps
}) => {
  return (
    <Tooltip title={tooltipText}>
      <Button
        {...restProps}
        disabled={isLoading}
        startIcon={iconOnStart}
        endIcon={
          isLoading ? (
            <CircularProgress color="primary" size="20px" />
          ) : (
            iconOnEnd
          )
        }
        className={className}
        variant={variant}
        sx={
          variant === 'contained'
            ? {
                minWidth: 'auto',
                fontWeight: '500',
                textTransform:'capitalize',
                background: background,
              }
            : variant === 'outlined'
            ? {
                fontWeight: '500',
                minWidth: 'auto',
                textTransform:'capitalize',
                background: background,
              }
            : {}
        }
        type={formType}
        disableRipple
        color={color}
        onClick={onClickHandler}>
        {buttonText}
      </Button>
    </Tooltip>
  );
};

export default ButtonComponent;
