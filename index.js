import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Search_Box from './src/search_box';
import _ from 'lodash'
import WikiArea from './src/wikiarea'

const API_KEY = 'af98ac93d35d56045307954fac7d7853';



 class App  extends Component
{
  constructor(props)
  {
    super(props);
    this.state={query:"hyderabad",result:[]};
  };
   
  weatherJSON() {
    fetch(`https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${this.state.query}`)
    .then(response => response.json())
    .then(data => this.setState({ result: data }));
    // console.log(this.state);
  }

  changeQuery(query)
  {
    this.setState({query:query});
    this.weatherJSON();
    console.log(this.state);
  }
  render(){
    // const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300)
    const changeQue =(query) => {this.changeQuery(query)};
    const weather = this.weatherJSON();
    const x=this.state.result;
   
  return (<div>
    <div className="mainheading">WIKI SEARCH</div>
    <Search_Box onQuery= {changeQue} />
    <div className="panel panel-default">
    <WikiArea result={this.state.result}/>
    </div>
    </div>
  );

  }
};

ReactDOM.render( <App />, document.querySelector('.container'));
