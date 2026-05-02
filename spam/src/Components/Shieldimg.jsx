import shield from '../assets/shield.png'


export default function Shieldimg()
{
    return (
      <>
      <div className={'mx-auto block mb-3 w-64 mt-2'}>
        
        <div className={' mx-auto block w-64      w-[50px] h-[50px] object-cover rounded-lg'}>
          
          <img src={shield} className={'rounded-sm '} alt="" />
        </div>
          
       <h1 className={'justify-self-center text-4xl font-bold text-sky-600'}>Spam Detector</h1>
      
        
        </div>
         <div className={'text-nowrap mx-auto block w-100 text-xs text-gray-600'}><p >Protect yourself from spam and phishing attempts.Paste any message or email</p><p className={'mx-auto block w-35'}>below to analyze it instantly.</p></div>
      </>
        
       
    )
}