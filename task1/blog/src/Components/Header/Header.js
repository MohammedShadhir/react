import React, {createContext, useReducer} from 'react'
import '../Header/Header.css'
import '../Header/mode.css'
import BlackBtn from './ColorButtons/BlackBtn';
import BlueBtn from './ColorButtons/BlueBtn';
import GreenBtn from './ColorButtons/GreenBtn'
import PinkBtn from './ColorButtons/PinkBtn';
import StateReducer from './state/StateReducer';

const stateContext = createContext();

function Header(props) {
    const [state, dispatch] = useReducer(StateReducer, "pink");


    return (<div className={
        `Header ${state}`
    }>
        <div className='Header_Log '>
            <div>

                <h1>LOGO</h1>
            </div>
            <stateContext.Provider value={
                {state, dispatch}
            }>
                <div className='box'>
                    <GreenBtn/>
                    <PinkBtn/>
                    <BlueBtn/>
                    <BlackBtn/>


                </div>

            </stateContext.Provider>
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
        <div>
            <input type="text"
                onChange={
                    props.OnSearch
                }/></div>
    </div>)
}
export default Header;
export {
    stateContext
};
