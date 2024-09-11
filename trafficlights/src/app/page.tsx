'use client'
import { Light } from "@/components";
import { useState } from "react";
export default function Page() {
    const [active,setActive] = useState('green')
    const [timer,setTimer] = useState(4000)
    return (
        <div className="flex flex-col gap-10">
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