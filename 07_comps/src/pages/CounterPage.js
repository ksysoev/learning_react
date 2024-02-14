import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_ACTION = 'increment';
const DECREMENT_ACTION = 'decrement';
const CHANGE_VALUE_ACTION = 'change-value';
const ADD_VALUE_ACTION = 'add-value';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_ACTION:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_ACTION:
            return {
                ...state,
                count: state.count - 1
            }
        case CHANGE_VALUE_ACTION:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case ADD_VALUE_ACTION:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            throw new Error('Invalid action: ' + action.type);
    }
}



function CounterPage({ initialCount = 0 }) {
    const [state, dispatch] = useReducer(reducer, { count: initialCount, valueToAdd: 0 })

    const increment = () => {
        dispatch({ type: INCREMENT_ACTION });
    }

    const decrement = () => {
        dispatch({ type: DECREMENT_ACTION });
    }

    const onChange = (e) => {
        dispatch({ type: CHANGE_VALUE_ACTION, payload: parseInt(e.target.value) || 0 });
    }

    const onSumit = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_VALUE_ACTION });
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button primary onClick={increment}>Increment</Button>
                <Button secondary onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={onSumit}>
                <label htmlFor="count">Add a lot</label>
                <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" value={state.valueToAdd || ""} onChange={onChange} />
                <Button primary>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;