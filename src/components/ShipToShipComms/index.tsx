import React, { useCallback, useState } from 'react';
import { DECLOAKING_CODE } from '../../constants';
import Button from '../Button';
import Link from '../Link';
import Layout from '../Layout';
import styles from './s2s.module.css';

const ShipToShipComms: React.FC = () => {
  const [value, setValue] = useState('');
  const [isUncloaked, setIsUncloaked] = useState(false);
  const [hasSent, setHasSent] = useState(false);

  const handleSubmit = useCallback(() => {
    setHasSent(true);
    setIsUncloaked(value.toLowerCase().replace(' ', '').includes(DECLOAKING_CODE));
  }, [setHasSent, value, setIsUncloaked]);

  return (
    <Layout.ToolContainer tool="comms">
      <h2>Ship-to-Ship Comms</h2>
      <div className={styles.grid}>
        <textarea
          className={styles.textarea}
          spellCheck="false"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send Message</Button>
        {hasSent && (
          <div>
            <h3 className={styles.responseHeading}>Response</h3>
            {isUncloaked
              ? 'This is Osprey 053. Recognized code NUQNEH 5572. Decloaking and lowering shields. Board when ready.'
              : 'No ships responded.'}
          </div>
        )}
        {isUncloaked && (
          <Link color="blue" href="/04-uncloaked">
            Continue
          </Link>
        )}
      </div>
    </Layout.ToolContainer>
  );
};

export default ShipToShipComms;
