import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './edit-task.module.css';

const EditTask = ({
   editing,
   text,
   placeholder,
   onBlur,
   keyDownHandler,
   inputClassName,
   labelClassName,
   ...props
}) => {
   const [textValue, setTextValue] = useState(text);
   const inputElement = useRef();
   useEffect(() => {
      if (editing) {
         inputElement.current.focus();
      }
   }, [editing]);
   const changeHandler = (event) => {
      setTextValue(event.target.value);
   };

   return (
         editing ? <input
            ref={inputElement}
            className={cn(styles.input, inputClassName)}
            type="text"
            placeholder={placeholder}
            value={textValue}
            onBlur={onBlur}
            onChange={changeHandler}
            onKeyDown={keyDownHandler}
            {...props}
         /> : <span className={cn(styles.label ,labelClassName)}>{textValue}</span>
   );
};

EditTask.defaultProps = {
   editing: false,
   text: '',
   placeholder: ''
};

EditTask.propTypes = {
   editing: PropTypes.bool,
   text: PropTypes.string,
   placeholder: PropTypes.string,
   inputClassName: PropTypes.string,
   labelClassName: PropTypes.string,
   onBlur: PropTypes.func,
   keyDownHandler: PropTypes.func
};

export default EditTask;
