import React,{Component} from 'react'

class  Search_Box extends Component
{
    constructor(props)
    {
        super(props);
       
    }
    render()
    {
      return ( <div><h2 className="searchheading">Search</h2><input className="searchbox" onKeyPress ={event => this.onInputChange(event) }
       type="text"  /></div>);
    }
    onInputChange(event)
    {
       
        if(event.key=='Enter')
        this.props.onQuery(event.target.value);
        
      
    }

};

export default Search_Box;