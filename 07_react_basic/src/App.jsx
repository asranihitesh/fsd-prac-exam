import { useState } from "react";
import "./style.css";
export default function App(){const [count,setCount]=useState(0);return <main><h1>Basic React App</h1><p>Button clicked {count} times.</p><button onClick={()=>setCount(count+1)}>Click me</button></main>;}