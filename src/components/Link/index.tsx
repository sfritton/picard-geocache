import React from 'react';
import styles from '../Button/button.module.css';

interface Props {
  color?: 'orange' | 'orange-light' | 'blue';
  isRound?: boolean;
  className?: string;
  href: string;
}

const Link: React.FC<Props> = ({
  children,
  color = 'orange',
  isRound = false,
  className = '',
  href,
}) => {
  return (
    <a
      data-color={color}
      data-is-round={isRound}
      className={`${styles.button} ${className}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
