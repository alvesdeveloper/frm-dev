import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function () {
  const [dados, setDados] = useState({ votosRoxo: 0, votosVerde: 0 });
  const renderVotoRoxo = () => {
    setDados((dadosAtuais) => {
      return { ...dadosAtuais, votosRoxo: dadosAtuais.votosRoxo + 1 };
    });
  };

  const renderVotoVerde = () => {
    setDados((dadosAtuais) => {
      return { ...dadosAtuais, votosVerde: dadosAtuais.votosVerde + 1 };
    });
  };

  const zerarVotacao = () => {
    setDados(() => {
      return { votosRoxo: 0, votosVerde: 0 };
    });
  };

  return (
    <Pagina titulo="Votação" subtitulo="Usando estado com objeto">
      <Flex col center>
        <Display
          texto="Qual a melhor cor"
          textoComplementar={`Verde: ${dados.votosVerde} | Roxo: ${dados.votosRoxo}`}
        />
        <Flex gap={5}>
          <Botao
            cor="bg-green-600"
            onClick={renderVotoVerde}
            redondo
            tamanho="2xl"
          ></Botao>
          <Botao
            cor="bg-purple-600"
            onClick={renderVotoRoxo}
            redondo
            tamanho="2xl"
          ></Botao>
        </Flex>
        <Botao
          texto="zerar"
          onClick={zerarVotacao}
          cor="bg-gray-700"
          tamanho="lg"
        ></Botao>
      </Flex>
    </Pagina>
  );
}
