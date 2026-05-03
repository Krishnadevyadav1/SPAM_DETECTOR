import shield from '../assets/shield.png'


export default function Shieldimg()
{
    return (
      <>
      <div className={'mx-auto mt-2 mb-2 flex w-full max-w-6xl flex-col items-center px-4 text-center'}>
        
        <div className={'mx-auto h-[58px] w-[62px] overflow-hidden rounded-lg sm:h-[66px] sm:w-[72px] md:h-[74px] md:w-[80px]'}>
          
          <img src={shield} className={'h-full w-full rounded-md object-cover'} alt="" />
        </div>
          
       <h1 className={'mt-3 text-4xl leading-none font-bold text-sky-600 sm:text-5xl md:text-[58px]'}>Spam Detector</h1>
      
        
        </div>
         <div className={'mx-auto mb-4 w-full max-w-3xl px-4 text-center text-[14px] leading-[1.45] text-[#3e5673] sm:text-[15px] md:mb-5 md:text-[17px]'}>
          <p>Protect yourself from spam and phishing attempts.Paste any message or email</p>
          <p>below to analyze it instantly.</p>
         </div>
      </>
        
       
    )
}
