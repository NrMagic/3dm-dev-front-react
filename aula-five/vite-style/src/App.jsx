import React from "react";
import ButtonStyled from "./components/ButtonStyled";
//import ButtonCss from "./components/ButtonCss";
//import BoasVindas from "./components/BoasVindas";
//import ButtonModulo from "./components/ButtonModulo";


export default function App() {
  return (
    <React.Fragment>

    <ButtonStyled 
    text="Wallas" 
    secondary={true}
    large={false}
    />
 
    </React.Fragment>

  )
}
    // <BoasVindas name="Padre Cicero"/>
    // <BoasVindas name="Padre Duque"/>
    // <BoasVindas name="Padre Predo"/>

    // <ButtonCss bgColor="#2A0647" label="button css" />

         /* <ButtonModulo 
      texto="button module"
      destaque={true}
      /> */