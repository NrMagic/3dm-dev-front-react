// Componete realizado de modo arrow  function
export const Ashiley = ({title, src, description, price, category}) => {

    return(
    
    <>

    {/* <body>
        <title>Ashiley Riot</title>

        <h1>Ashley Riot é o protagonista de Vagrant Story, um RPG de ação clássico da Square lançado em 2000. Ele é um agente de elite conhecido como Riskbreaker, pertencente aos Cavaleiros da Paz de Valendia (VKP). </h1>
      
    </body> */}

    <article>
        <h1>{title}</h1>
        <img src={src} alt={title} />
        <p>{description}</p>
        <p>{price}</p>
        <p>{category}</p>
    </article>
       
    </>

    )

}
