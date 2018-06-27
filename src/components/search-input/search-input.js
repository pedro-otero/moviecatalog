import React from 'react';
import { Redirect } from 'react-router-dom';

class SearchInput extends React.Component {
  state = {};

  onFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter } = this.state;
    return <form>
      {filter && <Redirect to={`/search?filter=${filter}`} />}
      <div className="form-group">
        <input
            id="search-filter"
            className="form-control"
            type="text"
            value={filter}
            onChange={this.onFilterChange} />
      </div>
    </form>;
  }
}

export default SearchInput;
