import React from "react";


const ShowItem=(props)=>{
    
  return(
    <div>
    <h1>Tables</h1>
    <hr/>
    <h2>Table 1</h2>
    {
    props.tableData.map((table,index) => (
      table.tableNo==='table-1' && <li key = {index}> order Id: {table.orderId}, price - {table.price} ,dish - {table.dish} - <button onClick={()=> {props.delete(table.orderId)}}>Delete Product</button></li>
    ))
    }
    <hr/>
    
    <h2>Table 2</h2>
    {props.tableData.map((table,index) => (
      table.tableNo==='table-2' && <li key = {index}> order Id: {table.orderId} ,price - {table.price} ,dish - {table.dish} - <button onClick={()=> {props.delete(table.orderId)}}>Delete Product</button></li>
    ))
    }
    <hr/>
    <h2>Table 3</h2>
    { props.tableData.map((table,index) => (
      table.tableNo==='table-3' && <li key = {index}> order Id: {table.orderId}, price - {table.price}, dish - {table.dish} - <button onClick={()=> {props.delete(table.orderId)}}>Delete Product</button></li>
    ))
    }
    
  </div>
  );

 
}
export default ShowItem;