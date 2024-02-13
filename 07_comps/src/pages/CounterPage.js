import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage({ initialCount = 0 }) {
    const { count, increment } = useCounter(initialCount);

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <Button primary onClick={increment}>Increment</Button>
        </div>
    )
}

export default CounterPage;