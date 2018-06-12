import React from 'react'

const WikiArea = (value) =>
{
    
    // console.log(val)
return (<div className="panel panel-default">
<div className="panel-body">{value.result[1]}<p></p>
<div>{value.result[2]}<p></p></div>

</div></div>);
    
}

export default WikiArea;