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
      <div className="search">
        <div className='searchbar'>Enter breed:</div>
        <input onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default Search;
