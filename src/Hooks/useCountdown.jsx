import { useEffect, useState } from "react"


export const useCountdown = () => {
    
    const [time,setTime] = useState({days:0,hours:0,minutes:0,seconds:0});
    


    useEffect(()=>{
        const target = new Date('2027-03-30T12:00:00');

        const interval = setInterval(()=>{
            const now = new Date();
            const countdown = target - now; 

            if(countdown <=0){
                clearInterval(interval);
                setTime({days:0,hours:0,minutes:0,seconds:0})
                return;
            }

            let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
            let hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((countdown / (1000 * 60)) % 60);
            let seconds = Math.floor((countdown / 1000) % 60);

            days = String(days).padStart(2,"0")
            hours = String(hours).padStart(2,"0")
            minutes = String(minutes).padStart(2,"0")
            seconds = String(seconds).padStart(2,"0")
            
            setTime({days,hours,minutes,seconds})
        },1000)

        return () => clearInterval(interval); 
    },[])

    return{time}

    
}