import React from 'react';

interface Props {
  stardate: string;
}

const LogEntry: React.FC<Props> = ({ children, stardate }) => {
  return (
    <section>
      <h3>Stardate {stardate}</h3>
      {children}
    </section>
  );
};

export default LogEntry;
