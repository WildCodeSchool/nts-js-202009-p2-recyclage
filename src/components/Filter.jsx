import React from 'react';
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
    return (
      <div
        className={this.state.open ? 'containeropen' : 'containerclose'}
        onClick={() => {
          const isopen = !this.state.open;
          this.setState({ open: isopen });
        }}
      >
        <h2
          className={this.state.open ? 'filtert' : 'filtertopen'}
          onClick={() => {
            const isopen = !this.state.open;
            this.setState({ open: isopen });
          }}
        >
          {filterTitle}
        </h2>

        <div className={this.state.open ? 'open' : 'close'}>
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

export default Filter;
