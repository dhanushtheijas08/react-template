import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposite } from "./reducerSlice2";
function ReactComponent() {
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const accountBalance = useSelector((state) => state.reducer2.balance);
  return (
    <div>
      <div>
        <input
          type="number"
          className="border-2 border-slate-800"
          value={amount}
          onChange={(inp) => setAmount(Number(inp.target.value))}
        />
        <div>Balance : {accountBalance}</div>
        <button onClick={() => dispatch(deposite(amount))}>Add Amount</button>
      </div>
    </div>
  );
}
export default ReactComponent;
