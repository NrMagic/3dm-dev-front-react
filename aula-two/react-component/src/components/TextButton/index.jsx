function TextButton(params) {
    console.log(params)

    // Objeto criado com mais de um atributo
    let obj = {
        name:'joão',
        idade:30,
        address:'Rua Joao pedro',
        phoneNumber:"11967627389"
    }
    console.log(obj.name)
    console.log(obj.idade)
    console.log(obj.address)
    console.log(obj.phoneNumber)

    //Desistruturando o objeto do parameto da função
    let {name, idade} = obj
    // Realizando a chmada dos objetos apos a desisturação
    console.log(name)
    console.log(idade)

    return(
        <button type="button">
            {params.label}
        </button>
    )
}
// Assim podemos chamar mais de uma function por export
export default TextButton