import Twitch from "./TwitchLogo"
export default function NavBar(){
    return (
        <nav className=" w-full col-start-1 col-end-3 grid grid-cols-2 lg:grid-cols-3 px-3 bg-[#464650] border-b-2 border-neutral-900">
            <div className="flex justify-start items-start">
            <Twitch height="2.5rem" width="4rem" /> 
            <span className="hidden lg:block font-semibold text-xl text-[#ffffff]  border-[#ffffff] pb-2 p-1">Explorar</span>
            </div>
            <div className="hidden lg:flex justify-center p-1">
                <input className="w-[80%] p-[0.5rem_0.5rem] h-[80%] rounded-lg bg-transparent border-[.5px] border-white" type= "text" placeholder="Buscar"/>
            </div>
            <div className="flex justify-end items-end mb-2">
                <span>
                    <button className="hidden lg:block text-sm font-semibold rounded-md bg-[#35353B] hover:bg-[#44444d] px-2 py-1 mr-2">Iniciar Secion</button>
                </span>
                <span>
                    <button className="hidden lg:block text-sm font-semibold rounded-md bg-[#9147FF] hover:bg-[#885fc7] px-2 py-1 mr-2">Registrate</button>
                </span>
                <span>
                    <img className="w-8 h-auto rounded-[50%] mr-2"
                src="https://api.dicebear.com/9.x/avataaars-neutral/svg" alt="user"    />
                </span>

            </div>

        </nav>
    )
}