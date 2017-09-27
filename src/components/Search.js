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
          <div className='line'></div>
          <br/>
          <div className='searchbar'></div>
          <input placeholder="Enter a breed here!" onChange={event => this.onInputChange(event.target.value)} />
          <div>
            <br/>
          </div>
        </div>
      </nav>
    )
  }
}

export default Search;
