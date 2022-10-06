import { styled } from "@mui/material";
import tema from "../../themes/theme";

export const ListStyled = styled("ul")`
width: 100% ;
max-width: 900px ;
`;

export const ListItens = styled("li")`
  list-style: none;
  display: flex ;
  border: solid 1px red ;
`;

export const Picture = styled("img")`
  width: 100%;
`;

export const Name = styled("h3")`
  margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
`;

export const Value = styled("p")`
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Description = styled("p")`
  word-break: break-word;
`;
