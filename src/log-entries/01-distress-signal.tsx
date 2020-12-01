import React from 'react';
import LogEntry from '../components/LogEntry';

const DistressSignalEntry: React.FC = () => {
  return (
    <LogEntry stardate="46257.3">
      While enroute to Rigel IV for routine maintenance, we have received what appears to be a
      distress signal from an unknown vessel. Curiously, our long-range scanners cannot detect any
      ships at the beacon's source. We will know more after we have fed the signal into the
      Universal Translator.
      <h4>Distress Signal</h4>
      <code style={{ color: 'var(--color-blue-primary)' }}>
        malja' bopab QaptaHvIS yInchugh je. yulqa' chemvaH vIsIqnISmoH! (encrypted stuff here)
      </code>
    </LogEntry>
  );
};

export default DistressSignalEntry;
