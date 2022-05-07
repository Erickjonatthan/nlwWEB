import { CloseButton } from "../Componentes/CloseButton";
import bugImageUrl from '../img/Bug.png';
import ideaImageUrl from '../img/Idea.png';
import thoughtImageUrl from '../img/Thought.png';
import { Fragment, useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./steps/FeedbackSucessStep";
export const FeedbackTypes = {
    BUG:{
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um Inseto',

        },
       
    },
    IDEA:{
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma Lampada',

        },
    },
    OTHER:{
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um Balão de pensamento',

        },
    },

};

export type FeedbackType = keyof typeof FeedbackTypes;
export function WidgetForm(){

    const[feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    const[feedbackSent, setfeedbackSent] = useState(false)
    function handleRestartFeedback(){
        setfeedbackSent(false);
        setFeedbackType(null);

       
    }

    return(

        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
             {feedbackSent ?(
                 <FeedbackSucessStep 
                    onFeedbackRestartSucess={handleRestartFeedback}
                 />
             )
            :(
                <>
                        {!feedbackType ? (

                            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />



                        ) : (


                            <FeedbackContentStep

                                feedbackType={feedbackType}
                                onFeedbackRestartRequested={handleRestartFeedback}
                                onFeedbackSent={() => setfeedbackSent(true)}
                            />
                        )

                        }
                </>
            )
             }


              
        <footer className="text-xs text-neutral-400 text-center mt-4">
               
                    Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
        </footer>



        </div>


)  
}
