const FetchTranslate = async(word)=> {

  const encodedParams = new URLSearchParams();
  encodedParams.append("q",word);
  encodedParams.append("target", "es");
  encodedParams.append("source", "en");
  
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '291c37179dmsh0a0b20de08c33b3p119cf8jsnb9b7c2d9ab29',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    body: encodedParams
  };
  
  const res=await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
  const json =await res.json()
  
  const result={
    ok:true,
    data:json.data.translations[0].translatedText
  }

  return  result

} 
 
export default FetchTranslate;