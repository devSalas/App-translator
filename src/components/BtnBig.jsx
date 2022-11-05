import styled from "./BtnBig.module.css"
const BtnBig = ({text,color}) => {
  let btnStyle;
  if(color =="Secondary") {
    btnStyle=` ${styled.btn} ${styled.bcSecondary}`
  }else{
    btnStyle=`${styled.btn}`
  }
  return ( 
    <button className={btnStyle}>
      {text}
    </button>
   );
}
 
export default BtnBig;