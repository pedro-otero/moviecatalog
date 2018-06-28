import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SearchInput extends React.Component {
  state = {
    filter: '',
  };

  onFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  enterSearch = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.setState({ filter: '' });
      this.props.history.push(`/search?filter=${this.state.filter}`);
    }
  };

  render() {
    const { filter } = this.state;
    return <form>
      <div className="form-group">
        <input
            id="search-filter"
            className="form-control"
            type="text"
            value={filter}
            placeholder="Search..."
            onChange={this.onFilterChange}
            onKeyDown={this.enterSearch} />
      </div>
    </form>;
  }
}

SearchInput.propTypes = {
  history: PropTypes.object,
};

export default withRouter(SearchInput);
