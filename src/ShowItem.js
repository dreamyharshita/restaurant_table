import React from "react";


const ShowItem=(props)=>{
    

    const cond=props.OnAddition;
     console.log(cond);
    return(
        <div>
     { !cond && <div>
        <ul id="table 1" type="circle">Table 1</ul>
        <ul id="table 2">Table 2</ul>
        
        <ul id="table 3">Table 3</ul>
        
        </div> }
        
        
        </div>
    )
}
export default ShowItem;