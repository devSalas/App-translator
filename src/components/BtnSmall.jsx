
import styled from "./BtnSmall.module.css"
const BtnSmall = ({text,position}) => {
  let estiloBtn;
  if(position) estiloBtn = `${styled.btn} ${styled.btnPosition}`
  else estiloBtn = `${styled.btn}`
 
  

 console.log(estiloBtn)

  return ( 
    <>
      <button className={estiloBtn}>
        <img src="" alt="" />{text}
      </button>
    </>
   );  
}
 
export default BtnSmall;  