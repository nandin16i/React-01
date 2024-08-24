// import { useState } from "react";

    // const [count , setCount] = useState(1);//here 0 is intial state we can change this acc to us.
    // const countButtonClick=()=>{
    //     setCount(count+1)

    //     count = count+1;
    // };

    // const [multiplied , setMultiplied] = useState(1);//here 0 is intial state we can change this acc to us.

    // const multipliedValueClick=()=>{
    //     setMultiplied(multiplied*2)

    //     multiplied = multiplied*2;
    // };
    // return <>
    // <h3>this button is clicked for{count} no of times</h3>
    // <h2>multiplied value:{multiplied}</h2>
    // <button onClick={() => countButtonClick()}>this is a button</button>
    // <button onClick={() => multipliedValueClick()}>this is a button for multiply</button>
    // </>
//above is the correct code
//below is not sure

//     const Counter =(props) =>{
//         console.log("props",props)
//         const {buttonLable , color , testObject}=props;
//         const {studentName, department,marks} =testObject
//         const {js, python,react} =marks
//         const {total:jstotal} =js
       
//         const {total:pythontotal} =python
//         const {total:reacttotal} =react
//     const [count , setCount] = useState(0);
//     const [multiplied , setMultiplied] = useState(1);
//     const countButtonClick=()=>{
//         setCount(count+1)
//         setMultiplied(multiplied*2)

//     };
// return (
// <>
// <h3>this button is clicked for{count} no of times</h3>
// <h2>multiplied value:{multiplied}</h2>

//     <button onClick={() => countButtonClick()}>{props['buttonLable']}</button>
// </>
// )
// };

// import { useState } from "react";
// const Counter =(props) =>{
//     const {buttonLable,color,count,countButtonClick}=props;

//     return{
//         <>
//         <h1>this button is clickable{count}</h1>
//         <button onClick={()=>countButtonClick() style={{bordercolor:color}}}>
//         {buttonLable}
//         </button>
//         </>
//     };
// };
// export default Counter;

