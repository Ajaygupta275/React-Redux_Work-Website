import React, {useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useDispatch,useSelector} from 'react-redux'
import {fetchProduct} from '../store/productSlice'
import {add} from '../store/cartSlice'
import { STATUSES } from '../store/productSlice'

const Product = () => {

    const dispatch=useDispatch();
    const {data:products,status}=useSelector((state)=>state.product)
    // const [products,setProducts]=useState([]);

    useEffect(()=>{
      dispatch(fetchProduct());
        // const fetchProduct=async()=>{
        //     const res=await fetch('https://fakestoreapi.com/products')
        //     const data=await res.json();
        //     console.log(data);
        //     setProducts(data);
        
        // };
        // fetchProduct();
    },[]);

    const handlAdd=(products)=>{
         dispatch(add(products));
    }


    if(status===STATUSES.LOADING){
      return <Box sx={{ display: 'flex',}}>
      <CircularProgress />
    </Box>
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
