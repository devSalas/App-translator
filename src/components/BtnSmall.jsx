
import styled from "./BtnSmall.module.css"
const BtnSmall = ({text,position,conversacion,microfono,camara,siguiente,invertir}) => {
  let estiloBtn;
  if(position) estiloBtn = `${styled.btn} ${styled.btnPosition}`
  else estiloBtn = `${styled.btn}`
  
  if(camara) estiloBtn+=` ${styled.camara}`
  if(microfono) estiloBtn+=` ${styled.microfono}`
  if(conversacion) estiloBtn+=` ${styled.conversacion}`
  if(invertir) estiloBtn+=` ${styled.invertir}`
  if(siguiente) estiloBtn +=` ${styled.siguiente}`




  return ( 
    <>
      <button className={estiloBtn}>
        <img src="" alt="" />{text}
      </button>
    </>
   );  
}
 
export default BtnSmall;  