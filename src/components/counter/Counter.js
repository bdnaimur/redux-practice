import React from 'react';
import { connect } from 'react-redux';
import { decreament, increament } from '../../services/actions/counterAction';

const Counter = ({increament, decreament, count}) => {
    return (
        <div>
            <h2>Count {count}</h2>
            <button onClick={()=>increament(5)}>Increament</button>
            <button onClick={()=>decreament(1)}>Decreament</button>
        </div>
    );
};
const mapStateToProps = (state) =>({
    count: state.counterReducer.count
})
export default connect(mapStateToProps, {increament,decreament}) (Counter);