import React, { useCallback, useState } from 'react';
import { ACCESS_CODE, ACCESS_CODE_HINT } from '../../constants';
import Button from '../Button';
import Layout from '../Layout';
import Link from '../Link';
import PinInput from '../PinInput';
import styles from './comms.module.css';

const valueToDisplay = (value: string) => {
  const firstFive = value.slice(0, 5);
  const remainingChars = value.slice(5).split('');

  if (remainingChars.length < 1) return firstFive;

  return [firstFive, '', ...remainingChars].join('\t');
};

const SubspaceComms: React.FC = () => {
  const [value, setValue] = useState('');
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    [setValue],
  );

  const handleSubmit = useCallback(() => {
    setIsValid(value.toLowerCase() === ACCESS_CODE.toLowerCase());
  }, [setIsValid, value]);

  return (
    <Layout.ToolContainer tool="comms">
      <h2>Subspace Comms</h2>
      {isValid ? (
        <>
          Recognized user Jean-Luc Picard. Connecting to Subspace Communication System{' '}
          <span className={styles.loading}>
            <span>.</span>
            <span style={{ animationDelay: '200ms' }}>.</span>
            <span style={{ animationDelay: '400ms' }}>.</span>
          </span>
          <Link className={styles.continueLink} color="blue" href="/03-council-meeting">
            Continue
          </Link>
        </>
      ) : (
        <>
          Use of the Subspace Communication System requires Alpha-Two Clearance. Enter your Personal
          Access Code:
          <PinInput value={value} onChange={handleChange} />
          {isValid === false && (
            <div className={styles.errorText}>Did not recognize access code. Try again</div>
          )}
          <Button
            color="orange-light"
            className={styles.forgotButton}
            onClick={() => setIsHintVisible(true)}
          >
            Forgot your access code?
          </Button>
          <Button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </Button>
          {isHintVisible && (
            <div>
              <h3>Access Code Hint</h3>
              <ul>
                {ACCESS_CODE_HINT.map(([row, col], index) => (
                  <li key={index} className={styles.hint}>
                    <span>{row}</span>
                    <span>{col}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </Layout.ToolContainer>
  );
};

export default SubspaceComms;
