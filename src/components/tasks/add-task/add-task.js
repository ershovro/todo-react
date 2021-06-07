import React, {useState} from 'react';
import EditTask from '../edit-task';
import styles from './add-task.module.css';

const AddTask = ({}) => {

   return (
      <div className={styles.addTAsk}>
         <EditTask
            inputClassName={styles.input}
            placeholder="create a new task"
            editing={true}
         />
      </div>
   );
};

export default AddTask;
