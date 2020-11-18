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
    const { filterTitle, filter } = this.props;
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
          {filter.map((filter) => (
            <button key={filter} type="button" className="btnfilter">
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
  filter: PropTypes.array,
  open: PropTypes.string.isRequired,
};

export default Filter;
