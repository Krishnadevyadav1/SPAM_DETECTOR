
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


import PredictionResult from './PredictionResult';


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/predict";

export default function Form()
{ const [msg,setmsg]=useState("");
    const [res,setres]=useState("");
    const [err,seterr]=useState("");
    const [loading, setLoading] = useState(false);


     function helper() {
        if(!res)
        { return<>
         <p className={' text-xs text-gray-600 mb-2'}>Try an example:</p>
    <div className={' flex flex-row text-xs justify-items-center max-sm:flex-col max-sm:gap-2 max-sm:w-full'}>
<button onClick={(event)=>{event.preventDefault() ,setmsg("I HAVE A DATE ON SUNDAY WITH WILL!!")}} className={'ml-3 mr-2 outline outline-offset-2 ... outline-gray-200 rounded-sm max-sm:mx-0 max-sm:w-full max-sm:text-left max-sm:px-2 max-sm:py-1'}><FontAwesomeIcon icon={faEnvelope} />&nbsp;Legitimate Message</button>
<button onClick={(event)=>{event.preventDefault() ,setmsg("URGENT! You have won a 1 week FREE membership in our £100,000 Prize Jackpot! Txt the word: CLAIM to No: 81010 T&C www.dbuk.net LCCLTD POBOX 4403LDNW1A7RW18")}} className={'ml-3 mr-2 outline outline-offset-2 ... outline-gray-200 rounded-sm max-sm:mx-0 max-sm:w-full max-sm:text-left max-sm:px-2 max-sm:py-1'}><FontAwesomeIcon icon={faTriangleExclamation} />&nbsp;Spam Message</button>

    </div>
    </>
        }
        
    
} 


    function handleMsg(event)
    { event.preventDefault();
        setmsg(event.target.value);
        console.log(msg)
     
    }
    async function fetchresult(event)
    {event.preventDefault();
         if (loading) return;
         setLoading(true);
         seterr("");
         try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: msg }),
      });

      const data = await response.json();
      setres(data.result)
     

    }
    catch(err)
    {
        console.log(err)
        seterr("Failed to fetch");
    }
    finally {
      setLoading(false);
    }
}

    function resetForm(event)
    {
      event.preventDefault();
      setmsg("");
      setres("");
      seterr("");
    }
    return(
        <>
     
        <div className={'mx-auto block w-170 pt-3 pb-3 rounded-lg justify-items-center mt-5 border-2 border-gray-100 shadow-[0_0_20px_0_rgba(0,0,0,0.2)]  mb-2 max-sm:w-[95vw] max-sm:px-3'}>
        <form >
    <label>
       <p className={' mt-2 mb-2 text-sm'}>Message to Analyze:</p>
      
      <textarea onChange={handleMsg} className={'outline-2 w-153 h-32 resize-none outline-offset-2 outline-gray-200 ... rounded-sm  mt-2 mb-2 text-xs max-sm:w-full'} placeholder={"Paste or type your message here..."} name="postContent" rows={6} cols={70} value={msg}/>
    </label><br></br>
    
 {helper()}
 {err && <Alert className={'mt-3'} severity="error">{err}</Alert>}
   <div >
      
      <PredictionResult result={res} />
    </div>
       
    <br></br>
    <button
      onClick={res ? resetForm : fetchresult}
      disabled={loading}
      className={'inline-flex items-center justify-center gap-2 border-2 w-153 mb-2 rounded-md text-white py-0.5 bg-sky-300 hover:bg-sky-600 disabled:opacity-70 disabled:cursor-not-allowed max-sm:w-full'}
      type="submit"
    >
      {loading ? (
        <>
          <span className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faShield} />
          {res ? "Check again" : "Analyze Message"}
        </>
      )}
    </button>
</form>
        
     </div>  
      
     <p className={'mx-auto block w-80 text-xs text-gray-600 max-sm:w-[92vw] max-sm:text-center'}>Model is trained on small dataset so it can make mistake</p>
        </>
    )
}
