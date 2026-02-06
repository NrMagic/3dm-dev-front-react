let fullName = "Cleo de Jesus"
console.log(fullName.split(" "))

let arrayString = fullName.split(" ")
console.table(arrayString)

let arrayCount = arrayString.length
console.log(arrayCount)

let name = arrayString[0]
let lastName =  arrayString[arrayCount - 1]

function Welcome() {
    console.log("Hello World! dentro da função")
    
}
Welcome()

function WelcomeComParams(name){
    console.log(`Olá, ${name}`)
}
WelcomeComParams("Chocolate Branco")

function Teste(fullName){
   let arrayString = fullName.split(" ")
   let firstName = arrayString[0]
   let lastName = arrayString[arrayString.length - 1]
   console.log(`Olá, ${firstName} ${lastName}`)


}
Teste("Cleo Santos De Jesus Silva")
Teste("Wallas Martins Araujo")
Teste("Renato Alberto Santos")