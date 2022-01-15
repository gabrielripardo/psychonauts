import { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Psychonaut } from "../models/psychonaut.model";
import { loadPsychonauts } from "../store/psychonauts";
import { Container } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch();
  const psychonauts = useSelector((state: RootStateOrAny) => state.list);
  const loading = useSelector((state: RootStateOrAny) => state.loading);

  useEffect(() => {
    dispatch(loadPsychonauts());
    console.log(loading);
    console.log(psychonauts);
  }, [dispatch]);

  return (
    <Container>
      <h1>Lista de Psiconautas</h1>
    </Container>
  );
}
