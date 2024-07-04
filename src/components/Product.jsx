import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import {fetchProducts} from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Product = () => {
const dispatch = useDispatch();
    const {data:products,status} = useSelector((state)=>state.product);
    //const [ products, setProducts ] = useState([]);

    useEffect(()=>{
        dispatch(fetchProducts());
        
        // const fetchProduct = async ()=>{
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await  res.json();
        //     //console.log(data);
        //     setProducts(data);
        // }
        // fetchProduct();
    },[]);

    const handleAdd = (product)=>{
        // product store in store 
        dispatch(add(product));
    }
    if (status === STATUSES.LOADING){
        return <h2>Loading </h2>
    }

    if (status === STATUSES.ERROR){
        return <h2>Somthing went wrong </h2>
    }



    
    


  return (
    <div className='productsWrapper'>
        {
                products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} />
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                        <div className='btn' onClick={()=>handleAdd(product)}>Add to Cart</div>
                    </div>
                ))
        }
    </div>
  )
}

export default Product
