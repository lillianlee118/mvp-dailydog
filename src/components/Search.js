import React from 'React';

class Search extends React.Component {
  constructor() {
    super();
    this.state = { query: '' }
  }

  onInputChange(query) {
    this.setState({query});
    this.props.onChange(query);
  }

  render() {
    return (
      <nav>
        <div className='search'>
          <div className='searchbar'>Enter a breed:</div>
          <input onChange={event => this.onInputChange(event.target.value)} />
          <div className='button'>
            <button>Search</button>
          </div>
        </div>
      </nav>
    )
  }
}

export default Search;
