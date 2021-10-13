import React from 'react';

class SearchBar extends React.Component {
  state = { value: '' };

  onInputChange = e => {
    this.setState({ value: e.target.value });
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.searchSubmit(this.state.value);
  }

  render() {
    return (
      <div className="search-bar ui segment center">
        <form onSubmit={ this.onFormSubmit } className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              placeholder="type to search"
              value={ this.state.value }
              onChange={ this.onInputChange }
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;