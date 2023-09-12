import { createContext, useContext, useState, useEffect } from "react";

const createContextProvider = createContext();

const value = {
  name: "ram",
  age: 20,
};
function ContextProvider({ children }) {
  const [data, useData] = useState(value);
  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://the_url");
      res = await res.json();
      useData(res);
    }
    fetchData();
  }, []);

  return (
    <createContextProvider.Provider
      value={
        // value
        data
      }
    >
      {children}
    </createContextProvider.Provider>
  );
}
export function useContextProvider() {
  let context = useContext(createContextProvider);
  if (context === undefined)
    throw new Error("Context is used not inside it's parent");
  return context;
}
export default ContextProvider;
