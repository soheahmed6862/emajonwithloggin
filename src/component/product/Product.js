import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const hendleproductrevio=props.hendleproductrevio

    const {name,img,price,seller,stock,key}=props.product
    

    return (
        <div>
            <div className="productditalse">
                <div className="prosuctimg">
                   
                     <img src={img} alt=""/>
                </div>
                <div className="producttool">
                <h1><Link to={"/product/"+key}>{name}</Link></h1>
                <p>key{key}</p>
                <p>price{price}</p>
                <p>seller{seller}</p>
                <p>stock{stock}</p>
               
                      <button onClick={() =>hendleproductrevio(props.product)} className="btn">add to revio</button>

                </div>

            </div>
            
        </div>
    );
};

export default Product;