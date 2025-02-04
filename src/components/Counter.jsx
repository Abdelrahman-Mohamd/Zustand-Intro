import useStore from "../store/counter-store";

export default function Counter() {
  // Extract state and actions from your store
  const { count, increase, decrease, increaseBy } = useStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={() => increaseBy(10)}>Increase By 10</button>
    </div>
  );
}
