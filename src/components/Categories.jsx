import CategoryCards from "./CategoryCards"
export default function Categories() {
    const category = [
        {
            title: "Juegos",
            img: "https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg"
        },
        {
            title: "IRL",
            img: "https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg",
        },
        {
            title: "Musica",
            img: "https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg",
          },
          {
            title: "Creative",
            img: "https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg",
          },
          {
            title: "ESports",
            img: "https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg",
          },

    ]

    return (
        <section className="grid gap-7 lg:col-start-2 lg:col-end-3 bg-[#3e3e41] px-6 py-10">
            <h1 className="font-bold text-5xl text-white pb-8 ">Explorar</h1>
            <section>
                <article className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(190px,1fr))]" >
                    {category.map((category, index) => {
                        return (
                            <CategoryCards 
                            key={index}
                            title = {category.title}
                            img = {category.img}
                            />
                        )
                    })

                    }
                </article>
            </section>
        </section>

    )
}