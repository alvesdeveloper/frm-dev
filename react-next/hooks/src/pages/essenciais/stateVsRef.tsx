import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef, useState } from "react";

export default function () {
  const [estado, setEstado] = useState(0);
  const referencia = useRef(0);

  const incrementarReferencia = () => {
    referencia.current++;
  };

  return (
    <Pagina titulo="Referencia VS State" subtitulo="Entendendo useRef">
      <Display texto={`R: ${referencia.current} | S: ${estado}`} />
      <Flex gap={5}>
        <Botao
          redondo
          tamanho="2xl"
          cor="bg-pink-500"
          texto="R+"
          onClick={incrementarReferencia}
        ></Botao>
        <Botao
          redondo
          tamanho="2xl"
          cor="bg-green-500"
          texto="S+"
          onClick={() => {
            setEstado(estado + 1);
          }}
        ></Botao>
      </Flex>
    </Pagina>
  );
}
