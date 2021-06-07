import React from 'react';
import Tasks from '../tasks';
import styles from './app.module.css';

const App = () => {
   return (
      <div className={styles.app}>
         <Tasks />
      </div>
   );
};

export default App;
