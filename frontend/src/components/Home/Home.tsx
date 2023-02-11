import React from 'react';
import Bottom from '../Bottom/Bottom';
import Top from './Top';
import styles from './home.module.css';

const Home : React.FC = () => {
    return (
        <div className={styles.home}>
            <Top />
            <Bottom />
        </div>
    )
}

export default Home;
