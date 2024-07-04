import React, { useEffect, useState } from 'react'

const Product = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(()=>{
        const fetchProduct = async ()=>{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await  res.json();
            //console.log(data);
            setProducts(data);
        }
        fetchProduct();
    },[]);

  return (
    <div className='productsWrapper'>
        {
                products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} />
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                        <div className='btn'>Add to Cart</div>
                    </div>
                ))
        }
    </div>
  )
}

export default Product
