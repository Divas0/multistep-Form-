import { ReactElement, useState } from "react"

export function useMultiStepForm (steps:ReactElement[]){
    const [currentIndex, setCurrentIndex]=useState(0);

     function next(){
        
        setCurrentIndex((i)=> {if (i>= steps.length){
            return i
        } 
        return i+1 
    })

    }
    function back(){
        if (currentIndex !==0){
 setCurrentIndex(prev=> prev -1)}
    }


return {
next, currentIndex, setCurrentIndex, back, step:steps[currentIndex], steps, isFirstStep:currentIndex==0,
isLastStep: currentIndex === steps.length - 1,
}
}