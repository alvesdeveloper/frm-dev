import InputFormatado from "@/components/formulario/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/hooks/useStateValidado";

export default function () {
  const validarSenha = (senha: string) => {
    let correspondencia = senha.match(/[\d\S]{8,}/);
    return correspondencia?.[0].length === senha.length;
  };

  const [senha, setSenha, senhaehvalida] = useStateValidado("", validarSenha);

  let borda;
  if (senha === "") {
    borda = "borda-none";
  } else if (senhaehvalida) {
    borda = "border-green-600";
  } else if (!senhaehvalida) {
    borda = "border-red-600";
  }

  return (
    <Pagina
      titulo="Validando senha"
      subtitulo="Usando um hook personalizado para validação"
    >
      <InputFormatado
        valor={senha}
        onInput={(e) => setSenha(e.target.value)}
        label="Senha"
        tipo="text"
        className={`${borda} border-4 w-8 flex`}
      />
    </Pagina>
  );
}
