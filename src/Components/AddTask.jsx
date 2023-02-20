import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Actions"


export function AddTask() {
    const dispatch = useDispatch()
    const [textP, setTextP] = useState("")
    return (
        <div>
            <input type="text" onChange={
                (e) => setTextP(e.target.value)
            } />
            <button onClick={
                () => {
                    dispatch(
                        addTask(
                            {
                                text: textP, id: Math.random(), isDone: false
                            }
                        )
                    )
                }
            }>Add</button>
        </div>
    )
}