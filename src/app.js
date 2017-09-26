import React, { Component } from 'React';
import ReactDom from 'react-dom';
import DogList from './components/DogList';
import Search from './components/Search';
import request from 'superagent';
import './styles/styles.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pics: [],
    }
    this.handleTermChange = this.handleTermChange.bind(this);
  };

  componentDidMount() {
    this.handleTermChange('germanshepherd');
  }

  handleTermChange(term) {
    const url = `http://dog.ceo/api/breed/${term}/images`;
    request.get(url, (err, res) => {
      this.setState({pics: res.body.message.slice(0, 30)});
    });
  }

  render() {
    return (
      <div>
          <div className="col-md-6 offset-md-3">
            <div className='title' value='Daily Dogs'>
            <Search onChange={this.handleTermChange}/>
            <DogList pics={this.state.pics}/>
            </div>
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
