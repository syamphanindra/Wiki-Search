import React,{Component} from 'react'

class  Search_Box extends Component
{
    constructor(props)
    {
        super(props);
       
    }
    render()
    {
      return  <input className="searchbox" onKeyPress ={event => this.onInputChange(event) }
       type="text"  />
    }
    onInputChange(event)
    {
       
        if(event.key==='Enter')
        this.props.onQuery(event.target.value);
        
      
    }

};

export default Search_Box;