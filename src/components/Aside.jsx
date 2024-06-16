import Channel from "./Channel"
export default function Aside() {
    const recomendados = [
        {
            channel:"aquiles ezquivel",
            Game:"RUST",
            Viewers:"666 k"
        },
        {
            channel:"CANTIN FLASH",
            Game:"Pokemon",
            Viewers:"666 k"
        },
        {
            channel:"ibai",
            Game:"Fall Guys",
            Viewers:"4.9 k"
        },
        {
            channel:"jhudit",
            Game:"valoran",
            Viewers:"666k"
        },
        {
            channel:"camaleon",
            Game:"Mortal k",
            Viewers:"666"
        },
        {
            channel:"pico",
            Game:"survival ascend",
            Viewers:"666 k"
        },
              {
            channel:"chi coche",
            Game:"Fortnite",
            Viewers:"666 k"
        },
        {
            channel:"palvovirus",
            Game:"solo conversar",
            Viewers:"666 k"
        },
        {
            channel:"poderosisimo",
            Game:"elden ring",
            Viewers:"666 k"
        },
        {
            channel:"fidencio",
            Game:"Rust",
            Viewers:"666 k"
        },
        {
            channel:"viu tv",
            Game:"Grand thef a",
            Viewers:"666 k"
        },
         {
            channel:"aquiles ezquivel",
            Game:"RUST",
            Viewers:"666 k"
        },
        {
            channel:"CANTIN FLASH",
            Game:"Pokemon",
            Viewers:"666 k"
        },
        {
            channel:"ibai",
            Game:"Fall Guys",
            Viewers:"4.9 k"
        },
        {
            channel:"jhudit",
            Game:"valoran",
            Viewers:"666k"
        },
        {
            channel:"camaleon",
            Game:"Mortal k",
            Viewers:"666"
        },
        {
            channel:"pico",
            Game:"survival ascend",
            Viewers:"666 k"
        },
              {
            channel:"chi coche",
            Game:"Fortnite",
            Viewers:"666 k"
        },
        {
            channel:"palvovirus",
            Game:"solo conversar",
            Viewers:"666 k"
        },
        {
            channel:"poderosisimo",
            Game:"elden ring",
            Viewers:"666 k"
        },
        {
            channel:"fidencio",
            Game:"Rust",
            Viewers:"666 k"
        },
        {
            channel:"viu tv",
            Game:"Grand thef a",
            Viewers:"666 k"
        },
        {
            channel:"camaleon",
            Game:"Mortal k",
            Viewers:"666"
        },
        {
            channel:"pico",
            Game:"survival ascend",
            Viewers:"666 k"
        },
              {
            channel:"chi coche",
            Game:"Fortnite",
            Viewers:"666 k"
        },
        {
            channel:"palvovirus",
            Game:"solo conversar",
            Viewers:"666 k"
        },
        {
            channel:"poderosisimo",
            Game:"elden ring",
            Viewers:"666 k"
        },
        {
            channel:"fidencio",
            Game:"Rust",
            Viewers:"666 k"
        },
        {
            channel:"viu tv",
            Game:"Grand thef a",
            Viewers:"666 k"
        },
        {
            channel:"camaleon",
            Game:"Mortal k",
            Viewers:"666"
        },
        {
            channel:"pico",
            Game:"survival ascend",
            Viewers:"666 k"
        },
              {
            channel:"chi coche",
            Game:"Fortnite",
            Viewers:"666 k"
        },
        {
            channel:"palvovirus",
            Game:"solo conversar",
            Viewers:"666 k"
        },
        {
            channel:"poderosisimo",
            Game:"elden ring",
            Viewers:"666 k"
        },
        {
            channel:"fidencio",
            Game:"Rust",
            Viewers:"666 k"
        },
        {
            channel:"viu tv",
            Game:"Grand thef a",
            Viewers:"666 k"
        },
     
    ]
    
    return (
        <aside className="w-full mt-[2px] min-h-screen hidden lg:block col-start-1 col-end-2 row-start-1 row-end-3 bg-[#36363b]">
            <div className="flex items-center h-10 justify-between px-2 ">
            <p className="text-white">
              CANALES QUE TE RECOMENDADOS  
            </p>
            </div>
            <section className="flex flex-col ">
                {recomendados.map((canal)=> {
                    return (
                        <Channel 
                        key={`canal-${canal.channel}`}
                        channel={canal.channel}
                        Game={canal.Game}
                        Viewers={canal.Viewers}
                         />
                    )
                }
                )}
               
            </section>
            
        
        </aside>
    )
}