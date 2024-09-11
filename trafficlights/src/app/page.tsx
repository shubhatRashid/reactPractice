'use client'
import { Light } from "@/components";
import { useEffect, useState } from "react";
export default function Page() {
    const [active,setActive] = useState('red')
    const [timer,setTimer] = useState(0)
    const [redtime,setRedTime] = useState(0)
    const [yellowtime,setYellowTime] = useState(4)
    const [greentime,setGreenTime] = useState(5)

    useEffect(()=>{
        let interval = setInterval(()=>{
            setTimer((timer) => timer+1)
            console.log(timer)
            switch (timer) {
                case yellowtime:
                    setActive('yellow')
                    setYellowTime(yellowtime+8)
                    break;
                case greentime:
                    setActive('green')
                    setGreenTime(greentime+8)
                    break
                case redtime:
                    setActive('red')
                   setRedTime(redtime+8)
                    break;
            }
        },1000)
        return () => clearInterval(interval)
    })

    return (
        <div className="flex flex-col gap-10 h-full justify-center items-center">
            <div className="flex justify-center items-center h-[30%] w-full border p-5 rounded-xl ">
                <h1 className="font-bold text-sans" 
                style={{
                    fontSize:active === 'yellow'? '40px' : '100px',
                    color : active === 'red' ? 'red' : active == 'green'? 'green' : 'yellow'
                }}>
                    {active === 'red' &&  <p>STOP </p>}
                    {active === 'yellow' &&  <p>GET READY</p>}
                    {active === 'green' &&  <p>Go</p>}
                </h1>
            </div>
            <div className="flex bg-black gap-5 p-5 rounded-xl">
                <Light color={active=='red'?'#C40C0C':''}/>
                <Light color={active=='yellow'?'#FFC700':''}/>
                <Light  color={active=='green'?'#399918':''}/>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col bg-black gap-5 p-5 rounded-xl">
                    <Light color={active=='red'?'#C40C0C':''}/>
                    <Light color={active=='yellow'?'#FFC700':''}/>
                    <Light  color={active=='green'?'#399918':''}/>
                </div>
            </div>
        </div>
    );
}