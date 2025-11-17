// Método de array: Destructuring com objetos
// Podemos definir variáveis com propriedades do objeto com uma
//notação diferente, chamada destructuring;

//obj
const person = {
    name: "Jhon",
    lastName: "Doe",
  };
  console.log("obj " + person);
  
  //destructuring
  const { name: fname, lastName: lname } = person;
  console.log("destructuring " + fname);
  
  let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: "2.0",
  };
  
  const {
    rodas: vRodas,
    portas: vPortas,
    tetoSola: vTetoSolar,
    motor: vMotor,
  } = obj;
  
  console.log(vRodas);
  
  console.log(vPortas);
  