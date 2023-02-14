import React, {useContext} from 'react'
import Actions from '../state/Actions'
import {stateContext} from '../Header'

function BlackBtn() {
    const {state, dispatch} = useContext(stateContext)
    return (<button className="color black"
        onClick={
            () => {
                dispatch({type: Actions.black})


            }
    }></button>)
}

export default BlackBtn
