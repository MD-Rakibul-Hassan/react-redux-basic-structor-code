import {INCRIMENT,DECRIMEMT} from '../constants/constants'
const iniatalCounter = {
    count:0
}

const counterReducer = (state = iniatalCounter, action) => {
    switch (action.type) {
        case INCRIMENT:
            return {
                ...state,
                count:state.count + 1
            }
        case DECRIMEMT:
            return {
                ...state,
                count:state.count - 1
            }
        default:
            return state;
    }
}

export default counterReducer;