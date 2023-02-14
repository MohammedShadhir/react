import React, {useContext} from 'react'
import Actions from '../state/Actions'
import {stateContext} from '../Header'

function PinkBtn() {
    const {state, dispatch} = useContext(stateContext)
    return (<button className="color pink"
        onClick={
            () => {
                dispatch({type: Actions.pink})


            }
    }></button>)
}

export default PinkBtn
