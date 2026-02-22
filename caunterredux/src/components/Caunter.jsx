import {useSelector, useDispatch} from "react-redux"
import { increment, decrement } from "../redux/actions"

export const Counter = ()=>{
    const count = useSelector(store => store.count)
    const dispach = useDispatch();

    const handleIncrement = ()=>{
        dispach(increment)
    }

    const handleDecrement = ()=>{
        dispach(decrement)
    }

    return(
        <>
            <div>
                <h1>Count {count}</h1>
                <button onClick={()=>handleIncrement()}>+</button>
                <button onClick={()=>handleDecrement()}>-</button>
            </div>
        </>
    )
}