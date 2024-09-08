const TablaData = {
    title: "Información de Deportes",
    menuOptions: [
        { label: "Inicio", url: "/", active: true },
        { label: "Deportes", url: "/deportes" },
        { label: "Contacto", url: "/contacto" }
    ],
    listaDeportes: [
        {
            nombre: "Fútbol",
            descripcion: "Deporte de equipo jugado entre dos equipos de once jugadores con un balón esférico.",
            requisitos: "Balón de fútbol, zapatos, espinilleras",
            ranking: 5
        },
        {
            nombre: "Baloncesto",
            descripcion: "Deporte de equipo donde dos equipos, típicamente de cinco jugadores cada uno, se enfrentan en una cancha rectangular.",
            requisitos: "Balón de baloncesto, cancha, aros",
            ranking: 4
        },
        {
            nombre: "Tenis",
            descripcion: "Deporte de raqueta que se puede jugar individualmente contra un solo oponente o entre dos equipos de dos jugadores cada uno.",
            requisitos: "Raqueta, pelotas de tenis, cancha",
            ranking: 3
        }
    ]
};

export default TablaData;