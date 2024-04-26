import { DECRIMEMT, INCRIMENT } from "../constants/constants"


export const incrimentAction = () => {
    return {
        type:INCRIMENT
    }
}

export const decrimentAction = () => {
    return {
        type:DECRIMEMT
    }
}

