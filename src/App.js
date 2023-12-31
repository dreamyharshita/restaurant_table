import React,{useState} from "react";
import ShowItem from "./ShowItem";


 function App() {

  const [orderId,setOrderId]=useState('');
  const [price,setPrice]=useState('');
  
  const [dish,setDish]=useState('');
  const [tableNo,setTableNo]=useState('');
  
  const OrderIdHandler=(e)=>{
    setOrderId(e.target.value);
  }
  const PriceHandler=(e)=>{
    setPrice(e.target.value);
  }
  const DishHandler=(e)=>{
    setDish(e.target.value);
  }
  const TableHandler=(e)=>{
    setTableNo(e.target.value);
  }
  
  const ManageData=(e)=>{
    e.preventDefault();
    const obj={orderId,price,dish,tableNo}
    localStorage.setItem(orderId,JSON.stringify(obj));
   
   console.log(tableNo);

   <ShowItem OnAddition={true}  />
    
    setOrderId('');
    setDish('');
    setPrice('');
    setTableNo('');
  }
  
  return (
   
    <>
   <form>
    <label>Unique Order Id</label>
    <input type="number" id="order-id" onChange={OrderIdHandler} value={orderId}></input>
    <label>Choose Price</label>
    <input type="number" id="price" onChange={PriceHandler} value={price}></input>
    <label>Choose Dish</label>
    <input type="text" id="dish" onChange={DishHandler} value={dish}></input>
    
    <label>Table No</label>
    <select onChange={TableHandler}  >
    <option value="None">None</option>
                <option value="table-1">Table 1</option>
                <option value="table-2">Table 2</option>
                <option value="table-3">Table 3</option>
               
              
                
            </select>
    <button onClick={ManageData}>Add to Bill</button>
    

   </form>
   
   <ShowItem OnAddition={false}/>
   
    </>
  );
}

export default App;
