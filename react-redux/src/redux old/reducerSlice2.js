const initialState = {
  balance: 500,
  hasLoan: false,
  loanAmount: 0,
};

export default function reducer2(state = initialState, action) {
  switch (action.type) {
    case "reducer2/widthdraw":
      if (action.payload > state.balance) return state;
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "reducer2/deposite":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "reducer2/loan":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        hasLoan: true,
      };
    default:
      return state;
  }
}

export function widthdraw(amount) {
  return { type: "reducer2/widthdraw", payload: amount };
}
export function deposite(amount) {
  return { type: "reducer2/deposite", payload: amount };
}
export function getLoan(amount) {
  return { type: "reducer2/loan", payload: { amount } };
}
