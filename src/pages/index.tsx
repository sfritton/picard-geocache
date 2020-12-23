import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Link from '../components/Link';
import styles from './home.module.css';

const Home: React.FC<PageProps> = () => {
  return (
    <Layout.Grid>
      <Layout.Header title="Star Trek Geocache Puzzle" stardate="46251.3" />
      <Layout.Content disableNav>
        <div className={styles.wrapper}>
          <h2>The Puzzle</h2>
          Step into the world of Star Trek as Captain Jean-Luc Picard in command of the USS
          Enterprise. Help your crew decipher a mysterious distress signal that will eventually lead
          you to a real-world geocache.
          <br />
          <br />
          <b>Disclaimer:</b> While the puzzle does have a geocache at the end, it can still be
          enjoyed by non-geocachers.
          <div className={styles.buttonWrapper}>
            <Link href="/01-distress-signal" color="blue" isRound>
              Start the puzzle
            </Link>
          </div>
          <h2>About the site</h2>
          The design of this site is based on the LCARS interface used on Federation starships in
          Star Trek: The Next Generation. If you want to solve the puzzle, I recommend doing that
          before looking at the code. I wasn't careful about hiding the solutions from developers.
          <div className={styles.buttonWrapper}>
            <Link href="https://github.com/sfritton/picard-geocache" isRound>
              Check out the code
            </Link>
          </div>
        </div>
      </Layout.Content>
    </Layout.Grid>
  );
};

export default Home;
