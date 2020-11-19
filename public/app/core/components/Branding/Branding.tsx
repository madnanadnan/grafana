import React, { FC } from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';
import Particles from 'react-particles-js';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const LoginLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/ics_large_logo.png" alt="ICS" />;
};

const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  //const theme = useTheme();
  const background = css`
    background-color: #1f26c5 !important;
    background-size: cover !important;
  `;

  return (
    <>
      <div className={cx(background, className)}>
        {children}
        <Particles
          params={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  mode: 'push',
                },
                onHover: {
                  mode: 'repulse',
                },
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                grab: {
                  distance: 400,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: {
                  value: '#ffffff',
                },
                distance: 150,
                enable: true,
                warp: true,
              },
              move: {
                attract: {
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                enable: true,
                speed: 6,
                warp: true,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
                animation: {
                  minimumValue: 0.1,
                  speed: 3,
                },
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 5,
                },
                animation: {
                  minimumValue: 0.1,
                  speed: 30,
                },
              },
              stroke: {
                color: {
                  value: '#000000',
                  animation: {
                    enable: true,
                    speed: 3,
                    sync: true,
                  },
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/ics_mini_logo.jpg" alt="Grafana" />;
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
  static LoginTitle = 'Metrics Manager';
  static GetLoginSubTitle = () => {
    const slogans = ['The Intrepid Way', 'Better Together', 'Simplifying Data'];
    const count = slogans.length;
    return slogans[Math.floor(Math.random() * count)];
  };
}
