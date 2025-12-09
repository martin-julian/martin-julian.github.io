window.GAMES = [
    {
        id: "tiandeng",
        name: "Tian Deng",
        thumb: "/content/tiandeng-thumb.jpg",
        url: "/jeux/tiandeng.html",
        type: "final" // final · proto · tool
    },
    {
        id: "deliverance",
        name: "Deliverance: Witches' Heritage",
        thumb: "/content/deliverance-thumb.jpg",
        url: "/jeux/deliverance.html",
        type: "final"
    },
    {
        id: "canardage",
        name: "Canardage",
        thumb: "/content/canardage-thumb.jpg",
        url: "/jeux/canardage.html",
        type: "proto"
    },
    {
        id: "rush",
        name: "Rush",
        thumb: "/content/rush-thumb.jpg",
        url: "/jeux/rush.html",
        type: "final"
    }
];

window.dispatchEvent(new Event("gamesReady"));
