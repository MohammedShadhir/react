import React, {useContext} from 'react';
import Actions from '../state/Actions';
import {stateContext} from '../Header';


function GreenBtn() {

    const {state, dispatch} = useContext(stateContext)
    return (<button className="color green"
        onClick={
            () => {
                dispatch({type: Actions.green})


            }
    }></button>)
}

export default GreenBtn
