/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { filterTitle, filters, getFilter } = this.props;
    const { open } = this.state;
    return (
      <div className="container">
        <h2
          className={open ? 'filtertopen' : 'filtertclose'}
          onClick={() => {
            this.setState({ open: !open });
          }}
        >
          {filterTitle}
        </h2>

        <div className={open ? 'open' : 'close'}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                getFilter(filter);
              }}
              type="button"
              className="btnfilter"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  filterTitle: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  getFilter: PropTypes.func.isRequired,
};

export default Filter;
