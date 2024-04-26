import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrimentAction, incrimentAction } from './Redux_services/actions/actions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch()
    const handleCounter = () => {
      dispatch(incrimentAction())
    } 
    const handleDecrimentCount = () => {
      dispatch(decrimentAction())
    } 
  return (
		<div>
			<h1>Counter App</h1>
			<p>Count: {count}</p>
			<button onClick={handleCounter}>Incriment</button>
			<button onClick={handleDecrimentCount}>Decriment</button>
		</div>
	);
}

export default Counter
