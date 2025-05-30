import ProductList from './ProductList';
import React, { useState } from 'react';

//ShoghlHub.com 
function Product() {

 const productList = [
    {  title: 'Product 1', price: 100 ,quantity:0},
    {  title: 'Product 2', price: 200,quantity:0 },
    {  title: 'Product 3', price: 300 ,quantity:0},
  ];

const [products, setProducts] = useState(productList);

const incrementQ=(index)=>{
    const newProducts=[...products];
    newProducts[index].quantity++;
    setProducts(newProducts);

}

const decrement=(index)=>{
    const newProducts=[...products];
    if(newProducts[index].quantity > 0) {
        newProducts[index].quantity--;
        setProducts(newProducts);
    }

}
 const imageStyle={
    width: '100px',
    height: '100px',
  };

  return (
    products.map((product, index) => {
 return <ProductList product={product}
     key={index}
     imageStyle={imageStyle}
      increment={()=>incrementQ(index)}
      index={index}
       decrement={()=>decrement(index)}/>
    } ));
}
export default Product;
