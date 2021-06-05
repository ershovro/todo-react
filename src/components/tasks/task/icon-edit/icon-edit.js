import React from 'react';
import PropTypes from 'prop-types';

const IconEdit = ({onClick}) => {
   return (
      <svg onClick={onClick} width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
         <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
      </svg>
   );
};

IconEdit.propTypes = {
   onClick: PropTypes.func
};

export default IconEdit;
