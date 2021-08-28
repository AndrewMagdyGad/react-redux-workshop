import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    addValue,
    fetchCounter,
} from "./slices/counterSlice";
import {
    increment as inc,
    decrement as dec,
    addValue as add,
} from "./slices/priceSlice";

function App() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const price = useSelector((state) => state.price.counter);

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <button
                    onClick={() => {
                        dispatch(fetchCounter());
                        // dispatch(increment());
                        // dispatch(inc());
                    }}
                >
                    Increment
                </button>
                <div>
                    <div>{counter}</div>
                    <div>{price}</div>
                </div>
                <button
                    onClick={() => {
                        dispatch(decrement());
                        dispatch(dec());
                    }}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default App;
