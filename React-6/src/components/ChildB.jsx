
const ChildB = ({number,button}) => {
  return (
    <div style={{border:"1px solid black" , padding:"10px" , margin:"20px"}}>
      <h1>ChildB : {number}</h1>
      {button}
    </div>
  )
}

export default ChildB
