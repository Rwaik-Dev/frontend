import { Button, ListItem } from "@mui/material";
import { Description, ListStyled, Name, Picture, Value } from "./Lista.style";

const Lista = () => {
  return (
    <ListStyled>
      <ListItem>
        <Picture src="https://github.com/rwaik-dev.png" />
        <div>
          <Name>Wilker Rwaik Eloi</Name>
          <Value>R$ 1.000.000.000,00 por hora</Value>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            excepturi aspernatur nemo, sequi facilis dignissimos quibusdam
            officiis recusandae, quam reiciendis eaque error, labore aliquid
            placeat quis nulla cum? Laborum, molestias.
          </Description>
          <Button>Marcar Aulas</Button>
        </div>
      </ListItem>
    </ListStyled>
  );
};

export default Lista;
