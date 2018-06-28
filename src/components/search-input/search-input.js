import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SearchInput extends React.Component {
  enterSearch = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.history.push(`/search?filter=${e.target.value}`);
      e.target.value = '';
    }
  };

  render() {
    return <form>
      <div className="form-group">
        <input
            id="search-filter"
            className="form-control"
            type="text"
            placeholder="Search..."
            onKeyDown={this.enterSearch} />
      </div>
    </form>;
  }
}

SearchInput.propTypes = {
  history: PropTypes.object,
};

export default withRouter(SearchInput);
