import React from 'react'
import Cart from '../Cart/Cart'
import CreateBlog from '../CreateBlog/CreateBlog'
import Header from '../Header/Header'
import '../Wrapper/Wrapper.css'

function Wrapper() {
    return (<div className='Wrapper'>
        <div className='Wrapper_Header'>
            <Header/>
        </div>
        <div className='Wrapper_Cart'>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>

        </div>
        <div className='Footer'></div>
        <div> {/* <CreateBlog/> */} </div>

    </div>)
}

export default Wrapper
