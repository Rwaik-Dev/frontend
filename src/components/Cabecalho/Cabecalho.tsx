import { HeadPage, Logo } from "./Cabecalho.style";

const Cabecalho = () => {
  return (
    <HeadPage>
      <div>
        <Logo src="/images/myteacher.png" />
      </div>
      <p>Encontre o professor perfeito</p>
    </HeadPage>
  );
};

export default Cabecalho;
