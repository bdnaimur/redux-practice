import { decreament_value, increament_value } from '../types';

const initialState = {
    count: 5
}
export default function(state = initialState, action){
    switch(action.type){
        case increament_value:
        return {
            ...state, count: state.count + action.payload
        }
        case decreament_value:
            return{
                ...state, count: state.count - action.payload
            }
            default:
                return state
    }
}