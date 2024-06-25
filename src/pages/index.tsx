import Link from "next/link";
import Perfil from "./Componentes/Perfil";
import { Pagina1 } from "./Componentes/Pagina1";

export default function Home() {
  return (
    <>
      <nav>
        <Link href={"/Componentes/Pagina1"}>Pagina1</Link>
        <Link href={"/Componentes/Pagina2"}>Calculadora</Link>
      </nav>
      <p>hola</p>
      <p>chao</p>
      <Perfil nombre="Pablo" apellido="Marmol" edad={30} rol="docente"/>
      <Perfil nombre="Jose" apellido="Perez" edad={15} rol="estudiante"/>

    </>
  );
}
