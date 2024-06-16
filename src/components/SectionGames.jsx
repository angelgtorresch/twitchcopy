import Tags from "./Tags"
export default function SectionGames (){
    const gamesSec = [ 

        {
            Name: "Rust",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            Viewers:"194.4K",
            Tags:[]
        },
        {
            Name: "Solo Chateando",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            Viewers:"256 K",
            Tags:["IRL"],
            Nuevo: false
        },
        {
            Name: "LEAGE OF LEYEND",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/21779-624x832.jpg",
            Viewers:"522 K",
            Tags:["Simulación", "Juego de Rol"]
        },
        {
            Name: "SPECIAL EVENTS",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            Viewers:"1016 K",
            Tags:[]
        },
        {
            Name: "League",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
            Viewers:"187 K",
            Tags:["IRL (vida real)"]
        },
        {
            Name: "Fornite",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            Viewers:"9657 K",
            Tags:["Shooter","Juego de rol"]
        },
        {
            Name: "Maincraf",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
            Viewers:"3158 K",
            Tags:["Simulación"]
        },
        {
            Name: "Valorant",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            Viewers:"8556 K",
            Tags:["Shooter"]
        },
        {
            Name: "Survival Ascended",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/735904419_IGDB-285x380.jpg",
            Viewers:"631 K",
            Tags:["Shooter"]
        },
        {
            Name: "Rocket League",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/30921-285x380.jpg",
            Viewers:"1856 K",
            Tags:["Carreras"]
        },
        {
            Name: "Retro",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/27284-285x380.jpg",
            Viewers:"8570 K",
            Tags:["Retro"]
        },
        {
            Name: "Genshin Impact",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-285x380.jpg",
            Viewers:"1855 K",
            Tags:["RPG"]
        },
        {
            Name: "Destiny 2",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/497057-285x380.jpg",
            Viewers:"3748 K",
            Tags:["Simulación"]
        },
        {
            Name: "Overwatch",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg",
            Viewers:"14 K",
            Tags:["Simulación"]
        },
        {
            Name: "Elden Ring",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg",
            Viewers:"256 K",
            Tags:["RPG"]
        },
        {
            Name: "Grand Theft Auto F",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg",
            Viewers:"4221 K",
            Tags:["Juego de Rol", "Carreras"]
        },
        {
            Name: "Mortal Kombat",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/904864974_IGDB-144x192.jpg",
            Viewers:"111 K",
            Tags:["lucha"]
        },
        {
            Name: "Super Smash Bros Ultimate",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/504461_IGDB-144x192.jpg",
            Viewers:"7879 K",
            Tags:["Simulación", "Arcade", "Accion"]
        },
        {
            Name: "Pokémon UNITE",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/518379_IGDB-144x192.jpg",
            Viewers:"17854 K",
            Tags:["Estrategia"]
        },
        {
            Name: "Fornite",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            Viewers:"185 K",
            Tags:["Shooter","Juego de rol"]
        },
         {
            Name: "Just Chatting",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            Viewers:"315.8K",
            Tags:["IRL (vida real)"]
        },
        {
            Name: "Rust",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            Viewers:"194.4K",
            Tags:[]
        },
        {
            Name: "Solo Chateando",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            Viewers:"256 K",
            Tags:["IRL"],
            Nuevo: false
        },
        {
            Name: "LEAGE OF LEYEND",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/21779-624x832.jpg",
            Viewers:"522 K",
            Tags:["Simulación", "Juego de Rol"]
        },
        {
            Name: "SPECIAL EVENTS",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            Viewers:"1016 K",
            Tags:[]
        },
        {
            Name: "League",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
            Viewers:"187 K",
            Tags:["IRL (vida real)"]
        },
        {
            Name: "Fornite",
            img:"https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            Viewers:"9657 K",
            Tags:["Shooter","Juego de rol"]
        },
        
    ]
       return (
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] gap-3 bg-[#0E0E10]">
            {gamesSec.map((tag) => {
                return (
                    <Tags
                    key={"Juego-${tag.Name}"}
                    Name={tag.Name}
                    img={tag.img}
                    Viewers={tag.Viewers}
                    Tags={tag.Tags}
                    Nuevo={tag.Nuevo}
                    />
                )

            })}
        </section>
       )
}