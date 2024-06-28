// import React, { useRef } from "react";

// const Clickme: React.FC = () => {
//   const ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     console.log("You clicked " + ref.current + " times!");
//   }
// console.log(ref.current);

//   return (
//     <button type="button" className="btn" onClick={handleClick}>
//       Click me!
//     </button>
//   );
// };

// export default Clickme;

import React, { useRef } from "react";
import ChildRef from "./ChildRef";

const Clickme: React.FC = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    userRef.current?.focus();
  };
  return (
    <div>
      <h1>Clickme</h1>
      <ChildRef ref={userRef} name="TYNYBAY" />
      <button className="btn" onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default Clickme;
