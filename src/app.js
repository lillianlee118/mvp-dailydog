import React, { Component } from 'React';
import ReactDom from 'react-dom';
import DogList from './components/DogList';
import Search from './components/Search';
import PicModal from './components/PicModal';
import request from 'superagent';
import './styles/styles.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pics: [],
      selectedPic: null,
      modalIsOpen: false
    }
    this.handleChange = this.handleChange.bind(this);
  };

// can render when loaded
  // componentDidMount() {
  //   this.handleChange('corgi');
  // }

  openModal(pic) {
    this.setState({
      modalIsOpen: true,
      selectedPic: pic
    });
  }

  closeModal(pic) {
    this.setState({
      modalIsOpen: false,
      selectedPic: null
    });
  }

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
          <DogList pics={this.state.pics}
                   onPicSelect={selectedPic => this.openModal(selectedPic)} />
          <PicModal modalIsOpen={this.state.modalIsOpen}
                    selectedPic={this.state.selectedPic}
                    onRequestClose={ () => this.closeModal() } />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
