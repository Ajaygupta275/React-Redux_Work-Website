import React, {useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../store/cartSlice'
const Product = () => {

    const dispatch=useDispatch();
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchProduct=async()=>{
            const res=await fetch('https://fakestoreapi.com/products')
            const data=await res.json();
            console.log(data);
            setProducts(data);
        
        };
        fetchProduct();
    },[]);

    const handlAdd=(products)=>{
         dispatch(add(products));
    }
  return (
    <div className='productsWrapper'>
          {products.map((products)=>(
            <div className='card' key={products.id}>
                <img src={products.image} alt='image'/>
                <h4>{products.tittle}</h4>
                <h5>{products.price}</h5>
                <button onClick={()=>handlAdd(products)} className='btn'>Add to cart</button>
            </div>
          ))}
    </div>
  )
}

export default Product
