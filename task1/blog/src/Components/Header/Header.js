import React from 'react'
import CreateBlog from '../CreateBlog/CreateBlog'
import '../Header/Header.css'

function Header() {
    return (<div className='Header'>
        <div className='Header_Log'>
            <h1>LOGO</h1>
        </div>
        <div className='Header_title'>
            <h1>BLOG APPLICATIONS</h1>

        </div>
        <div className='Header_Btn'>
            <button onClick={
                () => {
                    <CreateBlog/>
                }
            }>CREATE</button>
        </div>
    </div>)
}

export default Header
