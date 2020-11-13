import React from 'react';
import PropTypes from 'prop-types';
import './Arrow.css';

function Arrow(props) {
  const { direction } = props;
  const arrowSign = direction === 'left' ? '<' : '>';
  return (
    <div className="ArrowContainer">
      <button type="button" className="Arrow">
        {arrowSign}
      </button>
    </div>
  );
}

Arrow.propTypes = { direction: PropTypes.oneOf(['left', 'right']).isRequired };

export default Arrow;
