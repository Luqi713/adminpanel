import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProduct from './AddProduct';

function Home() {
  return (
    <main className='main-container'>
        <AddProduct/>
    </main>
  )
}

export default Home
