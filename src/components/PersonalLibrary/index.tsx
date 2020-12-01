import React from 'react';
import Layout from '../Layout';
import styles from './library.module.css';

const PersonalLibrary: React.FC = () => {
  return (
    <Layout.ToolContainer tool="library">
      <h2>Personal Library</h2>
      <h3>
        Continue reading <span className={styles.continueReading}>Henry V</span>
      </h3>
      <div className={styles.lines}>
        <h4>Court</h4>
        <div className={styles.lineNumber}>87</div>
        Brother John Bates, is not that the morning which breaks yonder?
        <h4>Bates</h4>I think it be, but we have no great cause to desire the approach of day.
        <h4>Williams</h4>
        We see yonder the beginning of the day, but I think we shall never see the end of it. — Who
        goes there?
        <h4>King Henry</h4>
        <div className={styles.lineNumber}>90</div>A friend.
        <h4>Williams</h4>
        Under what captain serve you?
        <h4>King Henry</h4>
        Under Sir Thomas Erpingham.
        <h4>Williams</h4>A good old commander and a most kind gentleman.
        <br />I pray you, what thinks he of our estate?
        <h4>King Henry</h4>
        <div className={styles.lineNumber}>95</div>Even as men wracked upon a sand, that look to be
        washed off the next tide.
        <h4>Bates</h4>He hath not told his thought to the king?
        <h4>King Henry</h4>
        No. Nor it is not meet he should, for, though I speak it to you, I think the king is but a
        man as I am.
        <br /> The violet smells to him as it doth to me.
        <br /> The element shows to him as it doth to me.
        <br />
        <div className={styles.lineNumber}>100</div>All his senses have but human conditions.
        <br /> His ceremonies laid by, in his nakedness he appears but a man, and though his
        affections are higher mounted than ours, yet when they stoop, they stoop with the like wing.
        <br /> Therefore, when he sees reason of fears as we do, his fears, out of doubt, be of the
        same relish as ours are.
        <br /> Yet, in reason, no man should possess him with any appearance of fear, lest he, by
        showing it, should dishearten his army.
      </div>
    </Layout.ToolContainer>
  );
};

export default PersonalLibrary;
