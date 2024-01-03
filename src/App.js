import React,{useState,useEffect} from "react";
import ShowItem from "./ShowItem";



 function App() {

  const [orderId,setOrderId]=useState('');
  const [price,setPrice]=useState('');
  
  const [dish,setDish]=useState('');
  const [tableNo,setTableNo]=useState('');
  const [tableData,setData]=useState([]);

  useEffect(()=>{
    console.log("useEffect");
    const localStorageObj = localStorage;
    const localStorageKeys = Object.keys(localStorageObj);
    const loadedItem = [];
    
    for (let i in localStorageKeys) {
      const key = localStorageKeys[i];
      const itemDetailsString = localStorageObj[key];
    
      const updatedItemDetails = JSON.parse(itemDetailsString);
      loadedItem.push(updatedItemDetails);
    }
  console.log("loaded item",loadedItem)
    setData(loadedItem);
  },[]);
 
  


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
    const obj={
      orderId: orderId,
      price: price,
      dish: dish,
      tableNo: tableNo};

      setData([...tableData,obj]);

    localStorage.setItem(orderId,JSON.stringify(obj));
  
    
    setOrderId('');
    setDish('');
    setPrice('');
    setTableNo('');
    
  }

  const deleteData=(orderId)=>{
    const updatedData = tableData.filter((item) => item.orderId !== orderId);
    setData(updatedData);
    localStorage.removeItem(orderId);
  }
  
  return   (
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
   
     <ShowItem  tableData={tableData} delete={deleteData}/> 
    </>
  );
}

export default App;
