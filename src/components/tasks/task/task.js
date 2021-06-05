import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import IconDelete from "./icon-delete";
import IconEdit from "./icon-edit";
import styles from './task.module.css';

const Task = ({text, done}) => {
   const [editing, setEditing] = useState(false);
   const inputElement = useRef(null);
   const blurHandler = () => {
      setEditing(false);
   };
   const iconEditClickHandler = () => {
      setEditing(true);
      inputElement.current.focus();
   };
   const iconDeleteClickHandler = () => {

   };

   return (
      <div className={cn(styles.task, {
         [styles.editing]: editing,
         [styles.done]: done
      })}>
         <span className={styles.checkbox}></span>
         <input
            ref={inputElement}
            className={styles.input}
            type="text"
            value={text}
            readOnly={!editing}
            onBlur={blurHandler}
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
