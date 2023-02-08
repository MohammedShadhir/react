import React from 'react'
import '../Header/Header.css'


function Header(props) {


    return (
        <div className='Header'>
            <div className='Header_Log'>
                <h1>LOGO</h1>
            </div>
            <div className='Header_title'>
                <h1>BLOG APPLICATIONS
                </h1>

            </div>
            <div className='Header_Btn'>
                <button onClick={
                    props.data
                }>Create</button>
            </div>
        </div>
    )
}

export default Header
