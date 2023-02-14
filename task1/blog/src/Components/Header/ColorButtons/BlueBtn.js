import React, {useContext} from 'react'
import Actions from '../state/Actions'
import {stateContext} from '../Header'

function BlueBtn() {
    const {state, dispatch} = useContext(stateContext)
    return (<button className="color blue"
        onClick={
            () => {
                dispatch({type: Actions.blue})


            }
    }></button>)
}

export default BlueBtn
