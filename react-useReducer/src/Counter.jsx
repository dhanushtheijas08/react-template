import { useReducer } from "react";

const initialState = {
  count: 0,
};

function Counter() {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        if (state.count < 1) return state;
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, ...initialState };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="flex gap-6">
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrease
        </button>
        <div> {state.count} </div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increase
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })} className="block">
        Reset
      </button>
    </div>
  );
}
export default Counter;
