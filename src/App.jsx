import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {

    const[setvalue,formvalue] =  useState("");
    const [lastButton, setLastButton] = useState(""); 
    const onButtonClick = (buttonText) =>
      {
        
        if(buttonText==="C"){
            formvalue("");
        }
        else if(buttonText==='='){
            let yz= eval(setvalue);
            formvalue(yz);

        }
        else if(['+','-','*','/',].includes(buttonText)){
          let co=setvalue+buttonText;
          formvalue(co);
        }
        else{
          if(lastButton==='='){
            let co=buttonText;
            formvalue(co);
          }
          else{
          let co=setvalue+buttonText;
          formvalue(co);
          }
        }
        setLastButton(buttonText);
      }
      
    return(
    <div className={styles.calculator}>
      <Display setvalue={setvalue} ></Display>
      <ButtonsContainer onButtonClick ={onButtonClick} ></ButtonsContainer>
    </div>
    );
}

export default App;
