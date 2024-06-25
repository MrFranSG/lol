
import React, {useState} from 'react'
import  Form  from 'react-bootstrap/Form'
//import Form from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export const Pagina1 = () => {
  const [nombre, setnombre] = useState("Joselito"),
  [apellido, setapellido] = useState("Perez")
  const [errorNombre, setErrorNombre] = useState("")
  const validarNombre = (valor:string)=>{
    if (valor.length>4){
        setErrorNombre("");
    }else{
        setErrorNombre("Ingrese 4 digitos")
    }
    setnombre(valor);
  }
const handleRegistrar = ()=>{
    console.log("Se ha registrado con exito")
    alert("Listo"+ nombre + apellido);
}

  return (
    <>
    <h1>bienvenido {nombre} {apellido}</h1>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su Nombre" onChange={(e)=>validarNombre(e.currentTarget.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su Apellido" onChange={(e)=>setapellido(e.currentTarget.value)}/>
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleRegistrar}>Registrar</Button>
    </Form>





    </>
  )
}
export default Pagina1