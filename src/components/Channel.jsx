import clsx from "clsx"

export default function Channel({channel,Game,Viewers}){
    return (
    <div className="grid grid-cols-[12%_3fr] gap-2 p-2 hover:bg-[#34343B] cursor-pointer align-middle justify-center text-white ">
        <div className={clsx(`rounded-full ` , {'grayscale': !Viewers})}>
            <img src={`https://api.dicebear.com/9.x/adventurer/svg?seed=Felix=${channel}`} alt="" className="rounded-full sm: items" height="30px" width="30px" />
        </div>
        <div className="hidden xl:flex xl:flex-row xl:justify-between ">
        {
                Viewers ? (
                    <div>
                        <p className="text-sm font-bold">
                            {channel}
                        </p>
                        <p className="text-[#88888b] text-xs">
                            {Game}
                        </p>
                    </div>
                ):(
                        <p className="text-sm font-bold">
                            {channel}
                        </p>
                )
            }
        {
                Viewers ? (
                    <p className="text-sm">
                        {Viewers}
                    </p>
                ):(
                    <p>
                        
                    </p>
                )
            }
        </div>
    </div>)
}