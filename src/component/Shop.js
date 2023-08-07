import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux'

const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawAmount, depositAmount } = bindActionCreators(actionCreators, dispatch);

    return (
        <div>
            <h1>Your Bank Balance</h1>
            {/* <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawAmount(100)) }}>-</button>
            Update balance
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositAmount(100)) }}>+</button> */}
            <button className="btn btn-primary mx-2" onClick={() => { withdrawAmount(100) }}>-</button>
            Update balance
            <button className="btn btn-primary mx-2" onClick={() => { depositAmount(100) }}>+</button>
        </div>
    )
}

export default Shop
