
const ChildA = ({number,changeHandler}) => {
  return (
    <div style={{border:"1px solid black" , padding:"10px" , margin:"20px"}}>
      <h1>ChildA : {number}</h1>
      <button onClick={changeHandler}>A +</button>
    </div>
  )
}

export default ChildA
