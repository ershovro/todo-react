import React from 'react';
import Tasks from '../tasks';
import styles from './app.module.css';

const App = () => {
   return (
      <div className={styles.app}>
         <h1 className={styles.title}> To do </h1>
         <Tasks />
      </div>
   );
};

export default App;
