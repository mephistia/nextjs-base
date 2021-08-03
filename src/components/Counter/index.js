//import { useState } from "react"; // precisa do state
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from './counterSlice'


export function Counter() {
    // seleciona um valor no state que está na store (no caso, pega o do counter e seleciona o campo value)
    const count = useSelector((state) => state.counter.value)

    // dispara ações, deve chamar a função importada do slice
    const dispatch = useDispatch()

    return (
        <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br/>
        <span>{count}</span>
        <br/>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br/>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </button>
        </div>
    )
}