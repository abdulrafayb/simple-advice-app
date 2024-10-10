import { useEffect, useState } from "react";

/* building react component which is essentially a piece of UI and we call our main component App and components in react are really just functions which can return JSX */
export default function App() {
  /* to display the string on our UI we have to change the state which is the fundamental concept of react, so we have to update the state and below we create a new state which needs to be done at top level */
  /* usestate is a function in react which returns an array so we below destructure that array, in the first position we have the value of the state and the second value is a setter function which we can use to update the piece of state */
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(-1);

  async function getAdvice() {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  /* useeffect takes two arguments, first one is the function we want to execute in the beginning and the second one is the dependency array  */
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Advice React App!</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      {/* here we call the prop 'count' and we pass in the value of count */}
      <Message count={count} />
    </div>
  );
}

/* creating a new component for message as in react we try to divide UIs into components */
/* here we accept an object called props and now count is a property of this object */
function Message(props) {
  return (
    <p>
      {/* right now this component has no access to the value of count variable so we have to pass it into the main component like we have above and we do that using props which is basically like parameters of a function */}
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}

/* in this small application we have used alot of react ingredients that real-world applications have like state, effects, props, JSX and also created two components too */
