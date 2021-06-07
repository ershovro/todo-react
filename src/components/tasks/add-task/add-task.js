import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import EditTask from '../edit-task';
import {addTask} from '../../../redux/actions';
import styles from './add-task.module.css';

const AddTask = ({addTask}) => {
   const enterPressedHandler = (textValue) => {
      addTask(textValue);

      return 'resetText';
   };

   return (
      <div className={styles.addTask}>
         <EditTask
            inputClassName={styles.input}
            placeholder="create a new task"
            editing={true}
            onEnterPressed={enterPressedHandler}
         />
      </div>
   );
};

AddTask.defaultProps = {
   addTask: f => f
};

AddTask.propTypes = {
   addTask: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => ({
   addTask: (text) => dispatch(addTask(text))
});

export default connect(null, mapDispatchToProps)(AddTask);
