import React from 'react'

const WikiArea = (value) =>
{
    const val = value.result[2]
    // console.log(val)
return (<div className="panel-body">{val}</div>);
    
}

export default WikiArea;