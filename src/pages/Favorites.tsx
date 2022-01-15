import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import SimpleTable from "../components/SimpleTable";
import { Psychonaut } from "../models/psychonaut.model";
import { psychonautExample } from "../components/Favorites/mock";
import { getAll } from "../components/Favorites/StorageFarorite";

export default function Favorites() {
  const [psychonauts, setPsychonauts] = useState<any[]>([]);

  useEffect(() => {
    setPsychonauts(getAll());
    console.log("#list from local storage");
    console.log(getAll());
  }, []);

  // setPsychonauts([psychonaut]);
  return (
    <Container>
      <h1>Meus Favoritos</h1>
      <SimpleTable rows={psychonauts} />
    </Container>
  );
}
