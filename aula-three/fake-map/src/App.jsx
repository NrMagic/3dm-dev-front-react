import { useEffect, useState } from "react";
import PokeCard from "./Components/PokeCard";

function App() {

  
  
  const[data, setData] = useState({})
  
//const [nome, setNome] = useState("Wallas")
 // console.log(nome)
 // setNome("Martins")
 // console.log(nome)
  useEffect(() => {
    
    // fetch("https://fakestoreapi.com/products/1")
    // .then((response) => response.json())
    // .then((data) => setData(data))

     fetch("https://pokeapi.co/api/v2/pokemon/789")
    .then((response) => response.json())
    .then((data) => setData(data))
    
    //onsole.log("effect")
  }, [])

  //console.log("aqui é o state", data)
  return (
    <>
      {/*<h1>Item:</h1>
      <Ashiley
        title={data.title}
        description={data.description}
        price={data.price}
        category={data.category}
        src={data.image}
        />*/}

        <h1>Pokemon</h1>
        <PokeCard
          name={data?.name}
          image={data?.sprites?.front_default}
          type={data.types[0].type.name}
        />
    </>
  );
}

export default App;
