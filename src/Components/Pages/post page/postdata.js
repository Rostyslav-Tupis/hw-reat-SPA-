const profilePic = "https://pbs.twimg.com/profile_images/890872315956908032/erMyaee6_400x400.jpg";
const car1 = "https://pbs.twimg.com/media/FpLjZpIXoAUPrOR?format=jpg&name=medium";
const car2 ="https://pbs.twimg.com/media/FnaQazRWQAEkhMw?format=jpg&name=medium"
const car3 = "https://pbs.twimg.com/media/Fobz0h9X0AAHk0P?format=jpg&name=medium"
const car4 = "https://pbs.twimg.com/media/Fm6L5PQXwAMXQYz?format=jpg&name=4096x4096"
const car5 = "https://pbs.twimg.com/media/Flo9clKXgAAdsu4?format=jpg&name=medium"
const postData = [
    {
      author: {
        name: "Alfa Romeo",
        photo: profilePic,
        nickname: "@alfa_romeo",
      },
      content: "A leap forward towards the future of electric driving. The optimum weight distribution combined with the lower centre of gravity of the #AlfaRomeoTonale #PluginHybrid Q4 will enhance your journeys in all driving modes. https://alfaromeo.com/models/tonale-plug-in-hybrid #AlfaRomeo #JoinTheTribe",
      image: car1,
      date: "17 лют.",
      statistic:{
        comments:6,
        reposts:132,
        likes:382,
      },
      id:1,
    },

    {
      author: {
        name: "Alfa Romeo",
        photo: profilePic,
        nickname: "@alfa_romeo",
      },
      content: "The new #C43 is synonymous with innovation, audacity, and gorgeousness. With two new logos on its body sides, it takes the daring soul of #AlfaRomeo right on track. https://media.stellantis.com/em-en/alfa-romeo/press/alfa-romeo-f1-team-stake-unveils-the-c43-new-livery-designed-by-alfa-romeo-s-centro-stile #JoinTheTribe",
      image: car3,
      date: "29 січ.",
      statistic:{
        comments:13,
        reposts:93,
        likes:2384,
      },
      id:2,
    },

    {
      author: {
        name: "Alfa Romeo",
        photo: profilePic,
        nickname: "@alfa_romeo",
      },
      content: `Getting an award is the best way to celebrate the centenary of the model that better represents #AlfaRomeo's sporty soul. For the second year running, 
      @whatcar has named #GiuliaQuadrifoglio the Best Performance Car for Thrills! https://media.stellantis.com/em-en/alfa-romeo/press/the-alfa-romeo-giulia-quadrifoglio-named-best-performance-car-for-thrills-at-the-2023-what-car-car-of-the-year-awards #JoinTheTribe`,
      image: car4,
      date: "17 січ.",
      statistic:{
        comments:1399,
        reposts:2400,
        likes:17333,
      },
      id:3,
    },

    {
      author: {
        name: "Alfa Romeo",
        photo: profilePic,
        nickname: "@alfa_romeo",
      },
      content: "Our #AlfaRomeoTonale Hybrid has made its debut in Tokyo! Media, press, and dealers witnessed the launch of the symbol of the Brand’s metamorphosis. This is a significant moment for us, as it solidifies the Brand’s global presence. #AlfaRomeo #JoinTheTribe #ProudlyAlfaRomeo",
      image: car2,
      date: "2 січ.",
      statistic:{
        comments:7,
        reposts:12,
        likes:245,
      },
      id:4,
    },

    {
      author: {
        name: "Alfa Romeo",
        photo: profilePic,
        nickname: "@alfa_romeo",
      },
      content: "Refined sportiness on the road. The new Giulia features an extremely direct steering wheel paired with an 8-speed ZF automatic transmission with aluminium shift paddles to guarantee unparalleled handling in curves",
      image: car5,
      date: "1 січ.",
      statistic:{
        comments:942,
        reposts:7248,
        likes:30030,
      },
      id:5,

    },
  ]; 

export default postData