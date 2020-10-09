import React, { FC } from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const LoginLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/ics_mini_logo" alt="Grafana" />;
};

const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  //const theme = useTheme();
  const background = css`
    background: rgb(0, 212, 255);
    background: radial-gradient(
      circle,
      rgba(0, 212, 255, 1) 3%,
      rgba(9, 9, 121, 1) 88%,
      rgba(115, 179, 255, 1) 91%,
      rgba(2, 0, 36, 1) 100%
    );
  `;

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/ics_mini_logo" alt="Grafana" />;
};

const LoginBoxBackground = () => {
  const theme = useTheme();
  return css`
    background: ${theme.isLight ? 'rgba(6, 30, 200, 0.1 )' : 'rgba(18, 28, 41, 0.65)'};
    background-size: cover;
  `;
};

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static LoginBoxBackground = LoginBoxBackground;
  static AppTitle = 'Metrics Manager';
  static LoginTitle = 'Welcome to Metrics Manager';
  static GetLoginSubTitle = () => {
    const slogans = ['The Intrepid Way', 'Your single pane of glass', 'Built better together', 'Democratising data'];
    const count = slogans.length;
    return slogans[Math.floor(Math.random() * count)];
  };
}
