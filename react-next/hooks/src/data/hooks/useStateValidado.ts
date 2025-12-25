import { use, useState } from "react";

export default function useStateValidado(
  valorInicial: any,
  funcaovalidacao: (e: any) => boolean
) {
  const [valor, setValor] = useState(valorInicial);
  const [validado, setvalidado] = useState(false);

  function setValorValidado(novoValor: any) {
    setValor(novoValor);
    setvalidado(funcaovalidacao(novoValor));
  }

  return [valor, setValorValidado, validado];
}
