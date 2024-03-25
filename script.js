const aboutUsArray = [
    {
        id: 1,
        text: "We are experts in detailed post-construction and post-renovation cleaning services. Our scope of work includes stain removals, comprehensive window cleaning, comprehensive floor scrubbing and polishing, etc"
    },

    {
        id: 2,
        text: "We carry out professional cleaning, polishing and treatment of various types of hard floors including vitrified tiles, marble, granite, terrazzo and parquet floors."
    },

    {
        id: 3,
        text: "We are experts in detailed post-construction and post-renovation cleaning services. Our scope of work includes stain removals, comprehensive window cleaning, comprehensive floor scrubbing and polishing, etc."
    },

    {
        id: 4,
        text: "With the presence of COVID 19 and the need to keep our environment germ free, we are offering decontamination services to help you keep your environment clean for you and your customers."
    },

    {
        id: 5,
        text: "We specialize in detailed office cleaning using well behaved, cultured and trained personnel with effective operational and health & safety procedures."
    },

    {
        id: 6,
        text: "We are specialists in the upkeep of hotels, guest houses, apartments, and industrial units."
    },
]


const aboutCards = document.getElementById('about-cards')

const getAboutCardsHtml = () => {
    const aboutUsCardsHtml = aboutUsArray.map((aboutUsCard)=>{
        return `
            <div class="about-card">
                <span>${aboutUsCard.id}</span>
                <p>${aboutUsCard.text}</p>
            </div>
        `
    })

    return(aboutUsCardsHtml)
}

aboutCards.innerHTML = getAboutCardsHtml().join('')