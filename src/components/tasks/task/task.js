import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';

import EditTask from '../edit-task';
import IconDelete from './icon-delete';
import IconEdit from "./icon-edit";
import {completeTask, deleteTask, editTask} from '../../../redux/actions';
import styles from './task.module.css';

const Task = ({text, done, completeTask, deleteTask, editTask}) => {
   const [editing, setEditing] = useState(false);
   const blurHandler = (text) => {
      editTask(text);
      setEditing(false);
   };
   const iconEditClickHandler = () => {
      setEditing(true);
   };
   const enterPressedHandler = (text) => {
      editTask(text);
      setEditing(false);
   };

   return (
      <div className={cn(styles.task, {
         [styles.editing]: editing,
         [styles.done]: done
      })}>
         <span className={styles.checkbox} onClick={completeTask}></span>
         <EditTask
            text={text}
            editing={editing}
            onBlur={blurHandler}
            onEnterPressed={enterPressedHandler}
            inputClassName={styles.input}
            labelClassName={styles.label}
         />
         {!editing && <span className={styles.icons}>
            <IconEdit onClick={iconEditClickHandler}/>
            <IconDelete onClick={deleteTask}/>
         </span>}
      </div>
   );
};

Task.defaultProps = {
   done: false,
   completeTask: f => f,
   deleteTask: f => f
};

Task.propTypes = {
   id: PropTypes.string,
   text: PropTypes.string,
   done: PropTypes.bool,
   completeTask: PropTypes.func,
   deleteTask: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => ({
   completeTask: () => dispatch(completeTask(ownProps.id, !ownProps.done)),
   deleteTask: () => dispatch(deleteTask(ownProps.id)),
   editTask: (text) => dispatch(editTask(ownProps.id, text))
});

export default connect(null, mapDispatchToProps)(Task);
