// import { useState } from "react"
import { useState } from "react"
// const Counter = ()=>{
//   const [count, setcount] =useState(0)
// function increment (){
//  setcount(count+1)
// }
// function decrement (){
//  setcount(count-1)
// }
// function reset (){
//  setcount(0)
// }
//   return(
//     <>
//     <h1>Count : {count}</h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     <button onClick={reset}>Reset</button>
//     </>
//   )
// }
// export default Counter
const displayUser = ()=>{
  const [user , setuser] = useState({name:"Isha" , age :20})
  return(<>
  <h1>Username : {user.name} And Age : {user.age}</h1>
<button onClick={()=>{setuser({...user,age :user.age + 1})}}>change Age</button>
  </>)
}
export default displayUser