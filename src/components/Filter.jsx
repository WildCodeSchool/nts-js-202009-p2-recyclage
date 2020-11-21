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
      open: props.open,
    };
  }

  render() {
    const { filterTitle, filters, getFilter } = this.props;
    const { open } = this.state;
    return (
      <div
        className={open ? 'containeropen' : 'containerclose'}
        onClick={() => {
          const isopen = !open;
          this.setState({ open: isopen });
        }}
      >
        <h2
          className={open ? 'filtert' : 'filtertopen'}
          onClick={() => {
            const isopen = !open;
            this.setState({ open: isopen });
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
  filters: PropTypes.arrayOf.isRequired,
  open: PropTypes.string.isRequired,
  getFilter: PropTypes.string.isRequired,
};

export default Filter;
