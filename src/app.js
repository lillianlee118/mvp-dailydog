import React, { Component } from 'React';
import ReactDom from 'react-dom';
import DogList from './components/DogList';
import Search from './components/Search';
import request from 'superagent';
import './styles/styles.css';
import '../img/logo.png';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pics: [],
    }
    this.handleChange = this.handleChange.bind(this);
  };

//can render when loaded
  // componentDidMount() {
  //   this.handleChange('corgi');
  // }

  handleChange(term) {
    const url = `http://dog.ceo/api/breed/${term}/images`;
    request.get(url, (err, res) => {
      this.setState({pics: res.body.message.slice(0, 30)});
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='title'>Fetcher</div>
        <div>
          <Search onChange={this.handleChange}/>
          <DogList pics={this.state.pics}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
