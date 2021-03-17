import React from 'react';
import { useParams } from 'react-router';

import fakeData from '../../fakeData'
import Product from '../product/Product';

const Productdetailes = () => {

    let {productkey} = useParams();

    const product =fakeData.find(pd=> pd.key===productkey)
    console.log(product)
    return (
        <div>
         <h1>product is coming song :{productkey}</h1>

         <Product showaddtocart={false} product={product}></Product>
        </div>
    );
};

export default Productdetailes;