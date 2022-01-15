import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import SimpleTable from "../components/SimpleTable";
import { Psychonaut } from "../models/psychonaut.model";
import { psychonautExample } from "../components/Favorites/mock";

function getStorage() {
  let item = localStorage.getItem("psychonaut");
  console.log("#Storage");

  if (item) {
    console.log(JSON.parse(item));
  }
}

export default function Favorites() {
  const [psychonauts, setPsychonauts] = useState<Psychonaut[]>([
    psychonautExample,
  ]);
  getStorage();
  // setPsychonauts([psychonaut]);
  return (
    <Container>
      <h1>Meus Favoritos</h1>
      <SimpleTable rows={psychonauts} />
    </Container>
  );
}
