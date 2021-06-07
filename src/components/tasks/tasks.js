import React from 'react';
import Task from './task';
import AddTask from './add-task';

const Tasks = () => {
   return (
      <div>
         <AddTask />
         <Task text="to do"/>
      </div>
   );
};

export default Tasks;
