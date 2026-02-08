import {useSelector, useDispatch} from "react-redux"
import { increment, decrement } from "../redux/actions"

export const Counter = ()=>{
    const count = useSelector(store => store.count)
    const dispach = useDispatch();

    const handleIncrement = ()=>{
        dispach(increment)
    }

    const handle

    return(
        <>
            <p></p>
        </>
    )
}