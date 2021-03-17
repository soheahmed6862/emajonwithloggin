import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Cart = (props) => {
  
    const history =useHistory()
const handleproductshipment=()=>{
 history.push('/shiment')
}

    const cart=props.cart
    const totalprice=cart.reduce((total,prd)=> total+prd.price,0)
    let shopingsoct=0.0;

    if(totalprice>480){
        shopingsoct=8.00
    }
    if(totalprice>1000){
        shopingsoct=4.00
    }
   
    const text= (totalprice/10).toFixed(2)
    const grendtotal=(totalprice +shopingsoct+Number(text)).toFixed(2)

    return (
        <div>
            <h1>product order: {cart.length}</h1>
             <p>price: {cart.price}</p>
             <p>shopingsoct: {shopingsoct}</p>
             <p>text:{text}</p>
            <p>totalprice:{grendtotal}</p>

          <button onClick={handleproductshipment} >product shiment</button>
        </div>
    );
};

export default Cart;