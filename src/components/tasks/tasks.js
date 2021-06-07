import React from 'react';
import Task from './task';
import AddTask from './add-task';
import styles from './tasks.module.css';

const Tasks = () => {
   return (
      <div className={styles.tasks}>
         <AddTask />
         <Task text="to do"/>
      </div>
   );
};

export default Tasks;
