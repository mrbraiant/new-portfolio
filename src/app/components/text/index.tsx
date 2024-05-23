import { Typography } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { CSSProperties, ReactNode } from 'react';

type TextProps = {
  children?: ReactNode;
  type?:
    | 'body1'
    | 'body2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption';
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  secondary?: boolean;
  textAlign?:
    | 'center'
    | 'right'
    | 'left'
    | 'inherit'
    | 'justify';
  paragraph?: boolean;
  color?: string;
};

export const Text = ({
  children,
  type,
  style,
  sx,
  secondary = false,
  textAlign,
  paragraph = false,
  color,
}: TextProps) => {
  const theme = useTheme();

  return (
    <Typography
      align={textAlign}
      variant={type}
      color={
        secondary ? theme.palette.text.secondary : undefined
      }
      paragraph={paragraph}
      sx={sx}
      style={{
        ...style,
        color,
      }}
    >
      {children}
    </Typography>
  );
};
