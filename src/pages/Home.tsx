import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { loadPsychonauts } from "../store/psychonauts";
import { Psychonaut } from "../models/psychonaut.model";
import SimpleTable from "../components/SimpleTable";
import { Container } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import RefreshIcon from "@mui/icons-material/Refresh";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import ButtonFavorite from "../components/Favorites/ButtonFavorite";
import { savePsychonaut } from "../components/Favorites/StorageFarorite";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Home() {
  const dispatch = useDispatch();
  const psychonauts = useSelector((state: RootStateOrAny) => state.list);
  const loading = useSelector((state: RootStateOrAny) => state.loading);
  const [limit, setLimit] = useState(5);
  const [openMessage, setopenMessage] = React.useState(false);

  const handleClick = () => {
    setopenMessage(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setopenMessage(false);
  };

  function selectPyschonaut(psychonaut: Psychonaut) {
    console.log(psychonaut);
    if (psychonaut != null) {
      if (savePsychonaut(psychonaut)) {
        handleClick();
      }
    }
  }

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
      <SimpleTable
        rows={psychonauts}
        selectPsy={selectPyschonaut}
        Button={<ButtonFavorite />}
      />
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
      <Snackbar
        open={openMessage}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Psiconauta adicionado aos seus favoritos!
        </Alert>
      </Snackbar>
    </Container>
  );
}
