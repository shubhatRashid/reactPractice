export default function Light({color}:{color:string}) {
    return (
        <div
            className={`flex rounded-full w-[50px] h-[50px]`}
            style={{backgroundColor:color}}
        ></div>

    );
}