import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCount } from "../Redux/Actions/ActionCreator";

const CounterComponents = () => {
    const counter = useSelector((state) => state.counter.counter);
    console.log(counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter</h1>

            <button onClick={() => {
                if (counter === 10) return;
                dispatch(handleCount(1))
            }}>+</button>
            {counter}
            <button onClick={() => {

                if (counter === 0) return;
                dispatch(handleCount(-1))
            }
            }>-</button>
        </div>
    );
};

export default CounterComponents;
