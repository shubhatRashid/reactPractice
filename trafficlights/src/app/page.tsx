'use client'
import { Light } from "@/components";
import { useEffect, useState } from "react";
export default function Page() {
    const [active,setActive] = useState('red')
    const [timer,setTimer] = useState(0)
    let redtime = 0
    let yellowtime = 4
    let greentime = 5
    useEffect(()=>{
        let interval = setInterval(()=>{
            setTimer((timer) => timer+1)

            switch (timer) {
                case yellowtime:
                    setActive('yellow')
                    break;
                case greentime:
                    setActive('green')
                    break
                case redtime:
                    setActive('red')
                    break;
                case 8:
                    setTimer(0)
                    setActive('red')
                    break
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
            <div className="flex bg-black gap-5 p-5 rounded-xl text-white">
                <h2 className="font-bold text-sans text-5xl"
                    style={{
                        color : active === 'red' ? 'red' : active == 'green'? 'green' : 'yellow'
                    }} >0{timer}</h2>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col bg-black gap-5 p-5 rounded-xl">
                    <Light color={active=='red'?'#C40C0C':'white'}/>
                    <Light color={active=='yellow'?'#FFC700':'white'}/>
                    <Light  color={active=='green'?'#399918':'white'}/>
                </div>
            </div>
        </div>
    );
}