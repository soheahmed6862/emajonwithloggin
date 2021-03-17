
import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Review from './component/review/Review';
import Inventory from './component/inventory/Inventory';
import NoMatch from './component/noMatch/NoMatch';
import Productdetailes from './component/productdetailses/Productdetailes';
import Shiping from './component/shiping/Shiping';
import Lonin from './component/lonin/Lonin';
import { createContext, useState } from 'react';
export const UserContext=createContext()

function App(props) {

const [logInUser,setLogInUser]=useState({})

console.log(logInUser.email)

  return (
    <UserContext.Provider value={[logInUser,setLogInUser]}>
      <h3> email:{logInUser.email}</h3>
       <Header></Header>
            <Router>

  <Switch>
<Route path="/shop">

<Shop ></Shop>

</Route>

<Route path="/Inventory">
  <Inventory></Inventory>

</Route>


<Route path="/Review">

  <Review>

  </Review>

</Route>

<Route exact path="/">

<Shop ></Shop>

</Route>

<Route path="/product/:productkey">
<Productdetailes></Productdetailes>
</Route>

<Route path="/shiment">
<Shiping></Shiping>

</Route>

<Route path="/login">
<Lonin></Lonin>

</Route>



<Route path="*">
            <NoMatch />
          </Route>
  </Switch>

</Router>


      
  
    </UserContext.Provider>
  );
}

export default App;
