import styled from "./TraduceAhora.module.css"
const TraduceAhora = () => {
  return (  
    <div className={styled.container}>
      <div>
        <a href="">Quari Translate</a>
        <img src="" alt="" />
      </div>
      <h2 className={styled.h2}>Quick translation</h2>
      <div className={styled.contentToTraslate}>
        <select name="" id="" className={styled.select}>
          <option value="">Spanish</option>
          <option value="">English</option>
        </select>
        <div className={styled.description}>
         
        </div>
      </div>
      <h4 className={styled.h4}>Translate to</h4>
      <div className={styled.contentToTraslate}>
        <select name="" id="" className={styled.select}>
          <option value="">Spanish</option>
          <option value="">English</option>
        </select>
        <div className={styled.description}>
        
        </div>
      </div>
      <div>
        <div>conversacion</div>
        <div>speak</div>
        <div>camara</div>
      </div>
    </div>
   );
}
 
export default TraduceAhora;