import { Button } from "@mui/material";
import { IPropsTeacher } from "../../@types/teacher";
import {
  Description,
  ListStyled,
  Name,
  Picture,
  Value,
  Informations,
  ListItens,
  EmptyList,
} from "./Lista.style";

interface IListTeachers {
  teachers: IPropsTeacher[];
}

const Lista = (props: IListTeachers) => {
  return (
    <div>
      {props.teachers.length > 0 ? (
        <ListStyled>
          {props.teachers.map((teacher) => (
            <ListItens key={teacher.id}>
              <Picture src={teacher.picture} />
              <Informations>
                <Name>{teacher.name}</Name>
                <Value>{teacher.value_hour.toLocaleString("pt-br", {minimumFractionDigits: 2, style: "currency", currency: "BRL"})} por hora</Value>
                <Description>{teacher.description}</Description>
                <Button sx={{ width: "70%" }}>
                  Marcar Aulas com {teacher.name}
                </Button>
              </Informations>
            </ListItens>
          ))}
        </ListStyled>
      ) : (
        <EmptyList>Nada foi encontrado</EmptyList>
      )}
    </div>
  );
};

export default Lista;
