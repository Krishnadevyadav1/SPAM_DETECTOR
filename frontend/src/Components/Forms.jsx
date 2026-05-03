import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTriangleExclamation, faShield } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Alert from '@mui/material/Alert';

import PredictionResult from './PredictionResult';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/predict";

export default function Form() {
  const [msg, setmsg] = useState("");
  const [res, setres] = useState("");
  const [err, seterr] = useState("");
  const [loading, setLoading] = useState(false);

  function helper() {
    if (!res) {
      return (
        <>
          <p className={'mb-2 text-sm text-[#3e5673] sm:text-base md:text-[17px]'}>Try an example:</p>
          <div className={'flex w-full flex-col gap-2 text-sm sm:text-base md:flex-row md:gap-3 md:text-[17px]'}>
            <button onClick={(event) => { event.preventDefault(); setmsg("I HAVE A DATE ON SUNDAY WITH WILL!!") }} className={'w-full rounded-xl border border-gray-300 px-4 py-2 text-left md:w-auto md:py-1.5'}><FontAwesomeIcon icon={faEnvelope} />&nbsp;Legitimate Message</button>
            <button onClick={(event) => { event.preventDefault(); setmsg("URGENT! You have won a 1 week FREE membership in our £100,000 Prize Jackpot! Txt the word: CLAIM to No: 81010 T&C www.dbuk.net LCCLTD POBOX 4403LDNW1A7RW18") }} className={'w-full rounded-xl border border-gray-300 px-4 py-2 text-left md:w-auto md:py-1.5'}><FontAwesomeIcon icon={faTriangleExclamation} />&nbsp;Spam Message</button>
          </div>
        </>
      )
    }
    return null;
  }

  function handleMsg(event) {
    setmsg(event.target.value);
  }

  async function fetchresult(event) {
    event.preventDefault();
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
    catch (err) {
      console.log(err)
      seterr("Failed to fetch");
    }
    finally {
      setLoading(false);
    }
  }

  function resetForm(event) {
    event.preventDefault();
    setmsg("");
    setres("");
    seterr("");
  }

  return (
    <>
      <div className={'mx-auto mb-2 mt-4 w-[1120px] max-w-[95vw] rounded-2xl border-2 border-[#e3e5e8] bg-[#efefef] px-4 py-4 shadow-[0_0_14px_0_rgba(0,0,0,0.08)] sm:px-8 sm:py-6 md:mt-5 md:px-12 md:py-8'}>
        <form>
          <label>
            <p className={'mb-3 text-base text-black md:mb-4 md:text-[17px]'}>Message to Analyze:</p>

            <textarea onChange={handleMsg} className={'mb-4 h-44 w-full resize-none rounded-2xl border-4 border-[#d7dbe0] bg-transparent p-3 text-sm text-gray-700 outline-none sm:h-52 sm:p-4 sm:text-[15px] md:mb-5 md:h-[265px] md:text-[16px]'} placeholder={"Paste or type your message here..."} name="postContent" rows={6} cols={70} value={msg} />
          </label>

          {helper()}
          {err && <Alert className={'mt-3'} severity="error">{err}</Alert>}
          <div className={'mt-3 md:mt-4'}>
            <PredictionResult result={res} />
          </div>

          <button
            onClick={res ? resetForm : fetchresult}
            disabled={loading}
            className={'mt-5 inline-flex h-10 w-full items-center justify-center gap-3 rounded-xl bg-[#67b8de] px-5 text-sm text-white hover:bg-[#2f9fcf] disabled:cursor-not-allowed disabled:opacity-70 sm:h-11 sm:text-base md:mt-6 md:h-[56px] md:text-[17px]'}
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

      <p className={'mx-auto mb-2 w-[1120px] max-w-[95vw] text-center text-xs text-[#3e5673] sm:text-sm md:text-[13px]'}>Model is trained on small dataset so it can make mistake</p>
    </>
  )
}
