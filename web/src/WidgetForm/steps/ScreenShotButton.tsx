import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../../Componentes/Loading";

interface ScreenShotButtonProps{
   screenshot:string | null;
    OnScreenShotTook: (screenshot : string | null) => void;
}
export function ScreenShotButton({screenshot,OnScreenShotTook}: ScreenShotButtonProps){
    const [isTakingScreenShot, setisTakingScreenShot] = useState(false)
async function handleTakeScreenShot(){
    setisTakingScreenShot(true);

const canvas = await html2canvas(document.querySelector('html')!);
const base64image = canvas.toDataURL('image/png');
        OnScreenShotTook(base64image);
    setisTakingScreenShot(false);
}
        if(screenshot){

            return(
               <button
               type="button"
               className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
               onClick={() => OnScreenShotTook(null)}
               style={{
                backgroundImage : `url(${screenshot})`,
                backgroundPosition: 'right bottom',
                backgroundSize: 100,

               }}
               >
                <Trash weight="fill"/>

               </button>
            )
        }
    return(
        <button
            type="button"
            onClick={handleTakeScreenShot}
            className="p-2 mr-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors">

            
        {isTakingScreenShot ? <Loading />  : <Camera className="w-6 h-6" />}
        </button>
    )

}