import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Task from './task';
import AddTask from './add-task';
import {tasksListSelector} from '../../redux/selectors';
import styles from './tasks.module.css';

const Tasks = ({tasks}) => {
   return (
      <div className={styles.tasks}>
         <AddTask />
         {tasks.map( ({id, text, done}) =>
            <Task key={id} id={id} text={text} done={done}/>
         )}
      </div>
   );
};

Tasks.propTypes = {
   tasks: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string,
         text: PropTypes.string,
         done: PropTypes.bool
      })
   ).isRequired
};

const mapStateToProps = createStructuredSelector({
   tasks: tasksListSelector
});

export default connect(mapStateToProps)(Tasks);
