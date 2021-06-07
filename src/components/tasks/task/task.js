import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import EditTask from '../edit-task';
import IconDelete from './icon-delete';
import IconEdit from "./icon-edit";
import styles from './task.module.css';

const Task = ({text, done}) => {
   const [editing, setEditing] = useState(false);
   const blurHandler = () => {
     setEditing(false);
   };
   const iconEditClickHandler = () => {
      setEditing(true);
   };
   const iconDeleteClickHandler = () => {
   };

   return (
      <div className={cn(styles.task, {
         [styles.editing]: editing,
         [styles.done]: done
      })}>
         <span className={styles.checkbox}></span>
         <EditTask
            text={text}
            editing={editing}
            onBlur={blurHandler}
            inputClassName={styles.input}
            labelClassName={styles.label}
         />
         {!editing && <span className={styles.icons}>
            <IconEdit onClick={iconEditClickHandler}/>
            <IconDelete onClick={iconDeleteClickHandler}/>
         </span>}
      </div>
   );
};

Task.defaultProps = {
   done: false
};

Task.propTypes = {
   id: PropTypes.string,
   text: PropTypes.string,
   done: PropTypes.bool
};

export default Task;



/*         { editing ? <input
            ref={inputElement}
            className={styles.input}
            type="text"
            value={textValue}
            onBlur={blurHandler}
            onChange={changeHandler}
         /> : <span>{textValue}</span>}*/
