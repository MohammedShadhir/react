import Actions from '../state/Actions'


function StateReducer(state, action) {


    switch (action.type) {
        case Actions.green:
            return state = Actions.green;
        case Actions.black:
            return state = Actions.black;
        case Actions.pink:
            return state = Actions.pink;
        case Actions.blue:
            return state = Actions.blue;
        default:

    }


}

export default StateReducer
