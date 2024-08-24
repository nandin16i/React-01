//  import Counter from './counter'
//  const App=()=> {
  // const testObject ={
  //   studentName:"StudentName",
  //   department:"CS",
  //   marks:{
  //     js:{
  //       total:100,
  //     },
  //     python:{
  //       total:80,
  //     },
  //     react:{
  //       total:85,
  //     },
  //   },
  // };
  // const [count ,setCount] = useState(0);
  // const countButtonClick =()=>{
  //   setCount(count+1);
  // };
  // const getData = async()=>{
  //   const response=await fetch("https://jsonplaceholder.typicode.com/user");
  //   const responseValue = await response.json();
  //   console.log("responseValue:",responseValue)
  //   setData(responseValue)
  // };

  
  // return <>
  {/* <h1>hello world</h1>
  <Counter buttonLable="this is a from parent"
   color="red"
    testObject={testObject}
    count={count}
    countButtonClick={countButtonClick} } */}
    {/* <h1>hello</h1>
    <button onClick={() => getData()}>Get Data</button>
  <table>
    <tr>
      <th>sno</th>
      <th>name</th>
      <th>username</th>
      <th>email</th>
      <th>phoneno</th>
    </tr>
    <tr>
      <td>1</td>
      <td>anand</td>
      <td>and</td>
      <td>xyz</td>
      <td>679-298</td>
    </tr>
    <tr>

    <td>2</td>
    <td>anand</td>
    <td>nand</td>
    <td>pyq</td>
    <td>123-445</td>
  </tr>

  <tr>
    <td>3</td>
    <td>anand</td>
    <td>riya</td>
    <td>sdf</td>
    <td>123-445</td>
  </tr>
  <tr>
  <td>4</td>
  <td>anand</td>
  <td>tena</td>
  <td>cvb</td>
  <td>123-445</td>
  </tr>
  <tr>
    <td>5</td>
    <td>anand</td>
    <td>jyoti</td>
    <td>bnm</td>
    <td>123-445</td>
  </tr>
  </table>

  </>

};


export default App; */}
import { useState } from "react";

export const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const responseValue = await response.json();
    console.log("~getData~responseValue:", responseValue);
    setData(responseValue);
  };

  const resetData = () => {
    setData([]);
  };
 
  return (
    <>
      <h1>Hi!</h1>
      <h2>Nandini Sharma</h2>
      <button onClick={() => getData()}>Get Data</button>
      <button onClick={() => resetData()}>Reset Data</button>
      <table>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
        {data.map((item, idx) => (
          <tr key={idx }>
            <td>{idx + 1}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td><button>remove</button></td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default App;
