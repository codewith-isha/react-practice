import React from "react";
import { useState } from "react";
// 1 Counter app
// const counter = () => {
//   const [count , setcount] = useState(0)
//   return (
//     <>
//     <h1>Count {count}</h1>
//     <button onClick={()=>{setcount(count+1)}}>Increase</button>
//     <button onClick={()=>{setcount(count-1)}}>Decrease</button>
//     </>
//   )
// }
//  2 Toogle app
// const toggle = ()=>{
//   const [show, setshow] = useState(true)
//   return(
//     <>
//     {show && <h1>Hello world !!</h1>}
//     <button onClick={()=>{setshow(!show)}}>Toggle</button>
//     </>
//   )
// }
// 3. like counting app
// const like = ()=>{
//   const [like , setlike] = useState(0)
//   return (
//     <>
//     <h1>Likes : {like}</h1>
//     <button onClick={()=>{setlike(like + 1)}}>👍 like</button>
//         <button onClick={()=>{setlike(like - 1)}}>👎 unlike</button>
//     </>
//   )
// }

// 4. text input
// const Textinput = ()=>{
//   const [text, settext ] = useState("")
//   return(
//     <>
//   <input
//    type='text'
//    placeholder='enter your text'
//    value={text}
//    onChange={(e)=>{settext(e.target.value)}}
//   />
//   <h2>You Typed :{text}</h2>
//     </>
//   )
// }

// 5 . Mulpitle state
// const Profilecard = ()=>{
//   const [name , setname] = useState('Isha')
//   const [age, setage] = useState(20)
//   return(
//     <>
//     <h1>My name is {name}</h1>
//     <h2>My age is {age}</h2>
//     <input type='text' onChange={(e)=>{setname(e.target.value)}}/>
//     <input type="number" onChange={(e)=>{setage(e.target.value)}} />
//     </>
//   )
// }
// 6
// const Counter = ()=>{
//   const [count , setcount] = useState(0)
//   return(
//     <>
//     <h1>Count : {count}</h1>
//     <button onClick={()=>{setcount(count + 1)}}>Increase</button>
//     <button onClick={()=>{setcount(count - 1)}}>Decrease</button>
//     <button onClick={()=>{setcount(0)}}>Reset</button>

//     </>
//   )
// }

// 7
// const password = ()=>{
//   const [show , setshow] = useState(false)
//   return(
//     <>
//    <input type={show ? "text" : "password"}  />
//    <button onClick={()=>{setshow(!show)}}>{show ? "Hide" : "Show"}</button>
//     </>
//   )
// }

// 8
// const secret = ()=>{
//   const [show , setshow] = useState(false)
//   return(
//     <>
//     <input type={show ? "text" : "password"} />
//     <button onClick={()=>{setshow(!show)}}>{show ? "Hide" :"Show"}</button>
//     </>
//   )
// }
// 9.
// function ThemeToggle() {
//   const [dark, setDark] = useState(false);

//   const themeStyle = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column"
//   };

//   return (
//     <div style={themeStyle}>
//       <h2>{dark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
//       <button onClick={() => setDark(!dark)}>Toggle Theme</button>
//     </div>
//   );
// }
//  10. character counter
const countelement = () => {
  const [count, setcount] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="enter word"
        value={count}
        onChange={(e) => {
          setcount(e.target.value);
        }}
      />
      <p>Number of character : {count.length}</p>
    </>
  );
};

// export default ThemeToggle;
// export default Counter
// export default toggle
// export default like
// export default Textinput
// export default Profilecard
//  export default secret
// export default themeChanger
export default countelement;
