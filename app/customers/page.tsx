"use client";

import React, { createContext, useContext, useState } from "react";

// Create a context with a default value
const MyContext = createContext<{ count: number; increment: () => void }>({
  count: 0,
  increment: () => {},
});

// Component that provides the context value
function MyProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <MyContext.Provider value={{ count, increment }}>
      {children}
    </MyContext.Provider>
  );
}

// Component that consumes the context value
function MyComponent() {
  const { count, increment } = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Render the component tree with the provider
function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;
