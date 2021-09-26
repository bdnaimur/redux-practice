import { decreament_value, increament_value } from '../types';

export const increament = (a) =>{
    return {
        type: increament_value,
        payload: a
    }
}
export const decreament = (a) =>{
    return {
        type: decreament_value,
        payload: a
    }
}