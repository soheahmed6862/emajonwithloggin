import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const first20=fakeData.slice(0,20)
 const [product,setProduct]=useState(first20)
 const [cart,setCart]=useState([])

   

const hendleproductrevio = (product)=>{


    console.log("handelporduct")
    const newcaet=[...cart,product]
    setCart(newcaet)
}


    return (
        <div className="shopcontainer">
         
        
           <div className="productcontainer">
           <ul>
                 {
                     product.map(product =><Product product={product} showaddtocart={true} hendleproductrevio={hendleproductrevio}></Product>)
                 }
             </ul>
           </div>

           <div className="produccart">
              <h1>order summary: {cart.length}</h1>
          <Cart cart={cart} showaddtocart={true}></Cart>
             
           </div>
         </div>

      
    );
};

export default Shop;