import * as React from "react";
const GlobalContext = React.createContext({
  Bool: false,
  English: {},
  Spanish: {},
});

function globalReducer(state, action) {
  console.log(state);
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case "BOOLEAN": {
      return { ...state, Bool: action.payload };
    }
    default:
      throw new Error("Unknown action type " + action.type);
  }
}

function GlobalProvider({ children }) {
  const [state, dispatch] = React.useReducer(globalReducer, {
    Bool: false,
    English: {
      logo: "Surrendered Life",
      whatwedo:
        "What we do - Evangelism, Preach in churches, Encourage the church to boldly live for Christ, children’s ministry, youth ministry, pastoral/ leadership training, humanitarian, building projects, restoration of those in addictions, men’s & women’s ministry, worship music project, slums, homeless outreach, take bibles to those without the word and travel to share with indigenous groups. ",
      whoweare:
        "We are missionaries.  We are a family from the United States, from the State of Washington. Called out by the Lord in 2011, to go into the mission field, on a complete journey of faith. The Lord strengthened and prepared us, as He asked us to give up our home and sell all that we had to leave the U.S. and move to Costa Rica. We now serve traveling throughout all of Central America and have seen thousands of people impacted by the gospel of Jesus Christ! All glory to God as He continues to establish all for His purpose! It is our greatest desire to be a living sacrifice unto the Lord, and proclaim the gospel to all the world! BENEDICT FAMILY - Justin & Grifyn, Hailey, Adison, Chloey, Makensie, Landen, Levi, Jubilee, Kaeden & Olivia.",
      costaRicaHeader: "Costa Rica Missions",
      costaRicaOutreach: "Costa Rica Outreach",
      firstSlideHeader: "Surrendered Life Ministries",
      learnMoreButton: "Learn More",
      whatWeDo: "What We Do",
      whoWeAre: "Who We Are",
      ourVision: "Our Vision",
      getInvolved: "Get Involved",
      getInvolvedText: true,

      humanitarian: "Humanitarian Aid",
      humanitarianText:
        "Clothing/groceries to those in great poverty. Visiting homes in low income communities or slums or on the streets.",
      construction: "Construction Projects",
      constructionText: "building churches or repairing homes.",
      children: "Children’s Ministries",
      childrenText:
        "Sunday school classes or outreaches to children in communities using activities and music",
      rehabilitation: "Rehabilitation Ministry",
      rehabilitationText: "Rehabilitation of those in addictions (partnership with Misión Rescate CR) then discipleship and follow-up.",
      bible: "Bible Distribution",
      bibleText: "Bringing Bibles to communities without access to the word.",
      evangelism: "Action Sport and Street Evangelism",
      evangelismText: "Evangelism outreach using sports and music as a tool to reach out.",
      indigenous: "Indigenous Ministry",
      indigenousText: "Sharing the love of Jesus to remote villages.",
      clothing: "Clothing Project",
      clothingText: "To help small communities access clothing.",
      worship: "Worship Project",
      worshipText: "To help teach music and start worship teams for churches.",
      other: "Other",
      otherText:
        "We also participate in other forms of ministry including but not limited to, women’s or men’s ministry, rehabilitation of those in addictions (partnership with misión rescate CR) then discipleship and follow-up, slum outreach, pastoral training, and home visits.",

      vision:
        "Spreading the gospel of our Lord Jesus through out Costa Rica, our goal is to humbly serve as the Lord allows us each day. To come along side local churches and to go into the communities. To meet the greatest needs and ultimately to share the gospel of Jesus Christ! ",
    },
    Spanish: {
      logo: "Vida Rendida",
      whatwedo:
        "Lo que hacemos: evangelización, predicar en iglesias, animar a la iglesia a vivir con valentía para Cristo, ministerio de niños, ministerio de jóvenes, capacitación pastoral / de liderazgo, proyectos humanitarios, de construcción, restauración de adicciones, ministerio de hombres y mujeres, proyecto de música de adoración, barrios marginales, alcance para personas sin hogar, llevar biblias a los que no tienen la palabra y viajar para compartir con grupos indígenas. ",
      whoweare:
        "Somos misioneros. Somos una familia de Estados Unidos, del estado de Washington. Llamado por el Señor en 2011, para ir al campo misionero, en un camino completo de fe. El Señor nos fortaleció y preparó, cuando nos pidió que renunciéramos a nuestra casa y vendiéramos todo lo que teníamos para dejar los Estados Unidos y mudarnos a Costa Rica. ¡Ahora servimos viajando por toda Centroamérica y hemos visto a miles de personas impactadas por el evangelio de Jesucristo! ¡Toda la gloria a Dios mientras continúa estableciendo todo para Su propósito! ¡Nuestro mayor deseo es ser un sacrificio vivo para el Señor y proclamar el evangelio a todo el mundo! FAMILIA BENEDICT: Justin y Grifyn, Hailey, Adison, Chloey, Makensie, Landen, Levi, Jubilee, Kaeden y Olivia.",
      costaRicaHeader: "Misiones Costa Rica",
      costaRicaOutreach: "Alcance de Costa Rica",
      firstSlideHeader: "Ministerios de vida rendida",
      learnMoreButton: "Aprende más",
      whatWeDo: "Que hacemos",
      whoWeAre: "Quienes somos",
      ourVision: "Nuestra visión",
      getInvolved: "Involucrarse",
      getInvolvedText: false,
      humanitarian: "Ayuda humanitaria",
      humanitarianText:
        "Ropa / víveres para quienes se encuentran en situación de gran pobreza. Visitar hogares en comunidades de bajos ingresos o barrios marginales o en las calles.",
      construction: "Proyectos de Construcción",
      constructionText: "Construyendo iglesias o reparando casas.",
      children: "Ministerios de niños",
      childrenText:
        "Clases de escuela dominical o actividades de extensión para niños en comunidades utilizando actividades y música.",
      rehabilitation: "Ministerio de rehabilitación",
      rehabilitationText: "Rehabilitación de adictos (asociación con Misión Rescate CR) luego discipulado y seguimiento.",
      bible: "Distribución de la Biblia",
      bibleText: "Llevando Biblias a comunidades sin acceso a la palabra.",
      evangelism: "Deporte de acción y evangelización callejera",
      evangelismText:
        "Alcance de evangelización usando deportes y música como una herramienta para llegar.",
      indigenous: "Ministerio Indígena",
      indigenousText: "Compartiendo el amor de Jesús a aldeas remotas.",
      clothing: "Proyecto de ropa",
      clothingText: "Ayudar a las pequeñas comunidades a acceder a la ropa.",
      worship: "Proyecto de adoración",
      worshipText: "Para ayudar a enseñar música y comenzar equipos de adoración para iglesias.",
      other: "Otro",
      otherText:
        "También participamos en otras formas de ministerio que incluyen, entre otros, el ministerio de mujeres u hombres, rehabilitación de adictos (asociación con misión rescate CR) y luego discipulado y seguimiento, alcance en barrios marginales, capacitación pastoral y visitas domiciliarias.",
      vision:
        "Al difundir el evangelio de nuestro Señor Jesús por toda Costa Rica, nuestro objetivo es servir humildemente como el Señor nos permite cada día. Ir al lado de las iglesias locales e ir a las comunidades. ¡Para satisfacer las necesidades más grandes y, en última instancia, compartir el evangelio de Jesucristo!",
    },
  });
  const value = { state, dispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
function useGlobalContext() {
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used in GlobalProbider");
  }
  return context;
}
export { GlobalProvider, useGlobalContext };
