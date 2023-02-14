import React from 'react'
import '../Cart/Cart.css'


function Cart(props) {


    return (

        <div className='Cart'>
            <div className='Cart_Heading'>
                <div className='Cart_Image'></div>
                <div className='Cart_Heading_Title'>
                    <h1>{
                        props.content
                    }</h1>
                    <h6>{
                        props.auther
                    }</h6>
                </div>
            </div>
            <div className='Cart_Body'>
                <h3>{
                    props.content
                }</h3>
                <p>{
                    props.pra
                }</p>
            </div>
            <div className='Cart_Footer'>
                <button id="DltButtun"
                    onClick={
                        () => {
                            props.OnDelete(props.Index)

                        }
                }>DELETE</button>
                <button id="EditButtun"
                    onClick={
                        props.OnEdit
                }>EDIT</button>
            </div>
        </div>
    )
}

export default Cart
