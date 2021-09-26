import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from '../../services/actions/counterAction';
const Counter2 = () => {
    const count = useSelector(state => state.counterReducer.count);
    const dispatch = useDispatch();
    return (
        <div>
        <h2>Count {count}</h2>
        <button onClick={()=>dispatch(increament(5))}>Increament</button>
        <button onClick={()=>dispatch(decreament(1))}>Decreament</button>
    </div>
    );
};

export default Counter2;