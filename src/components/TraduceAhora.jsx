import BtnSmall from "./BtnSmall";
import {useState,useEffect} from "react"
import styled from "./TraduceAhora.module.css"
import FetchTranslate from "../services/useFetch";
const TraduceAhora = () => {

  const [word, setWord] = useState("");
  const [idioma, setIdioma] = useState("English");
  const [send,setSend]= useState(false)
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");
  

  useEffect(() => {
    if(send){
     /*  console.log("se envio") */
       FetchTranslate(word.trim(),idioma)
      .then(res=>{
        res.ok ?setResultado(res.data):setError(res)
       /*  console.log(res) */
        setSend(false)
      }
      ) 
      }
    
  }, [send]);

  
  const handleKeyDown = (e)=>{
    if(e.key ==="Enter"){
      setSend(true)
      setResultado("")
    }

  }
  const handleChange = (e)=>{
   /*  console.log(e.target.value) */
    setWord(e.target.value)

  }
  const handleChangeSelect = (e)=>{
    setIdioma(e.target.value)
    console.log(e.target.value)
    
  }


  return (  
    <div className={styled.container}>

      <h2 className={styled.h2}>TRADUCE ALTOQUE</h2>
      <h4>presione <span><img className={styled.keyboard} src="/src/assets/enter.jpg" alt="" /></span> para comenzar a traducir</h4>
      
      <div className={styled.contentToTraslate}>

        <select  onChange={handleChangeSelect} id="" className={styled.select}>
          <option value="English">English a Spanish</option>
          <option value="Spanish" >Spanish a English</option>
        </select>

        <div className={styled.description}>

         <textarea  onKeyDown={handleKeyDown} className={styled.textarea} onChange={handleChange} value={word}>

         </textarea>

        </div>
      </div>

      <h4 className={styled.h4}>Translate to</h4>

      <div className={styled.contentToTraslate}>

        <div className={styled.BoxidiomaATraducir} >
          <div className={styled.idiomaATraducir}>
          {
            idioma=="English" ?"Spanish" :"English"
          }
          </div>
          
        </div>

        <div className={styled.description}>

          <div className={styled.textTraducido} >
          { resultado || "" }
          </div>

        </div>

      </div>

      
    </div>
   );
}
 
export default TraduceAhora;