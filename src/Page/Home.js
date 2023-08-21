import React from 'react'
import Product from '../component/Product'

const Home = () => {
  return (
    <div>
      <h2 className='heading'>Welcome to the Redux Toolkit store</h2>
      <section>
        <h3>Product</h3>
        <Product/>
      </section>
    
    </div>
  )
}

export default Home
