const initialState = {
  name: "",
  age: "",
};

export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case "reducer1/createName":
      return { ...state, name: action.payload.name, age: action.payload.age };
    case "reducer1/deleteAccount":
      return { ...state, name: "", age: "" };
    case "reducer1/updateName":
      return { ...state, name: action.payload };

    default:
      return state;
  }
}
export function createName(name, age) {
  return { type: "reducer1/createName", payload: { name, age } };
}
export function updateName(name) {
  return { type: "reducer1/updateName", payload: name };
}
export function deleteAccount() {
  return { type: "reducer1/deleteAccount" };
}
