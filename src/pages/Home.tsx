import { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { loadPsychonauts } from "../store/psychonauts";
import { Psychonaut } from "../models/psychonaut.model";
import SimpleTable from "../components/SimpleTable";
import { Container } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Home() {
  const dispatch = useDispatch();
  const psychonauts = useSelector((state: RootStateOrAny) => state.list);
  const loading = useSelector((state: RootStateOrAny) => state.loading);
  const [limit, setLimit] = useState(5);

  function loadMore() {
    let newLimit = limit + 5;
    setLimit(newLimit + 5);
    dispatch(loadPsychonauts(newLimit));
  }

  useEffect(() => {
    dispatch(loadPsychonauts(limit));
    console.log(loading);
    console.log(psychonauts);
  }, [dispatch]);

  return (
    <Container>
      <h1>Lista de Psiconautas</h1>
      <SimpleTable rows={psychonauts} />
      <Box
        sx={{
          "& > button": { m: 1 },
          display: "flex",
          justifyContent: "center",
        }}
        mt={3}
      >
        <LoadingButton
          onClick={() => loadMore()}
          startIcon={<RefreshIcon />}
          loading={loading}
          loadingPosition="start"
          variant="contained"
          color="inherit"
        >
          Loading more...
        </LoadingButton>
      </Box>
    </Container>
  );
}
