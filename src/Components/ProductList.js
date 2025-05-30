import React from 'react'


function ProductList(props) {

const handleClick=()=>{
alert('product added to cart');
}
return (
<div class="row mb-3 mt-2">
    <div class="col-4">{props.product.title}</div>
    <div class="col-4">SAR {props.product.price}</div>
    
    <div class="col-4">
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">

            <button type="button" onClick={()=> props.decrement(props.index)} class="btn btn-danger">-</button>
            <button type="button" class="btn btn-warning">
                {props.product.quantity * props.product.price}
                <span class="badge text-bg-secondary"> {props.product.quantity}</span>
            </button>
            <button type="button" onClick={()=> props.increment(props.index)} class="btn btn-success">+</button>

        </div>
    </div>
    
</div>
);
}
export default ProductList;
