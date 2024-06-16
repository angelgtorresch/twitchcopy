export default function Tags(Name){
    return (
        <div className="p-1 ">
            <div className="cursor-pointer">
            {
                  Name.Nuevo ? (
                    <div className="absolute font-semibold p-1 pl-2 pr-2 mt-2 ml-2 rounded-[20px] text-[#EFEFF1] bg-purple-500 text-lg lg:text-base xl:text-sm">
                        Nuevo
                    </div>
                  ):(
                    <div>

                    </div>
                  )
                }
            
        
                <img src={Name.img} alt="" />
            </div>
            <div className="flex flex-row justify-between pt-2 align-middle ">
                <div className=" cursor-pointer w-full">
                <p className="text-md text-white font-semibold cursor-pointer hover:text-[#BF94FF]">
                    {Name.Name}
                </p>
                </div>
                <div className="hover:bg-[#34343B] rounded-md p-1">
                </div>
            </div>
            <div>
                <p className="text-xs text-[#474750] font-semibold cursor-pointer">
                    {`${Name.Viewers} espectadores`}
                </p>
            </div>
            <div>
                {
                    Name.Tags ? (
                        Name.Tags.map((tag) =>{
                            return (
                                <span key={`category-${tag}`} className="bg-[#1F1F23] font-semibold p-1 pl-2 pr-2 rounded-[20px] text-[#EFEFF1] cursor-pointer text-xs hover:drop-shadow-lg hover:bg-[#313133]">
                            {tag}
                        </span>
                            )
                        })
                    ):(
                        <div>
                            
                        </div>
                    )
                }
            </div>
        </div>
    )
}