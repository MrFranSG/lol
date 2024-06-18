import Perfil from "./Componentes/Perfil";

export default function Home() {
  return (
    <>
      <p>hola</p>
      <p>chao</p>
      <Perfil nombre="Pablo" apellido="Marmol" edad={30} rol="docente"/>
      <Perfil nombre="Jose" apellido="Perez" edad={15} rol="estudiante"/>

    </>
  );
}
