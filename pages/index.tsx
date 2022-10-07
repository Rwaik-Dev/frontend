import { Box } from "@mui/material";
import type { NextPage } from "next";
import { IPropsTeacher } from "../src/@types/teacher";
import Lista from "../src/components/Lista/Lista";

const Home: NextPage = () => {
  const teachers: IPropsTeacher[]= [
  {  
    id: 1,
    name: "Professor 1",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentexcepturi aspernatur nemo, sequi facilis dignissimos quibusdam officiis recusandae, quam reiciendis eaque error, labore aliquid placeat quis nulla cum? Laborum, molestias.",
    value_hour: 1000,
    picture: "https://github.com/rwaik-dev.png",
  },
  {  
    id: 2,
    name: "Professor 2",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentexcepturi aspernatur nemo, sequi facilis dignissimos quibusdam officiis recusandae, quam reiciendis eaque error, labore aliquid placeat quis nulla cum? Laborum, molestias.",
    value_hour: 2000,
    picture: "https://github.com/rwaik-dev.png",
  },
  {  
    id: 3,
    name: "Professor 3",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentexcepturi aspernatur nemo, sequi facilis dignissimos quibusdam officiis recusandae, quam reiciendis eaque error, labore aliquid placeat quis nulla cum? Laborum, molestias.",
    value_hour: 3000,
    picture: "https://github.com/rwaik-dev.png",
  },
  {  
    id: 4,
    name: "Professor 4",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentexcepturi aspernatur nemo, sequi facilis dignissimos quibusdam officiis recusandae, quam reiciendis eaque error, labore aliquid placeat quis nulla cum? Laborum, molestias.",
    value_hour: 4000,
    picture: "https://github.com/rwaik-dev.png",
  },
  ]

  return (
    <Box sx={{backgroundColor: "secondary.main"}}>
      <Lista teachers= {teachers}/>
    </Box>
  );
};

export default Home;
