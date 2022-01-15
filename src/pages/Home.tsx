import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { loadPsychonauts, searchPsychonaut } from "../store/psychonauts";
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
import TextField from "@mui/material/TextField";

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
  const [search, setSearch] = useState("");

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchPsychonaut(event.target.value));
    setLimit(5);
    setSearch(event.target.value);
  };

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
    setSearch("");
    dispatch(loadPsychonauts(newLimit));
  }

  useEffect(() => {
    if (search == "") {
      dispatch(loadPsychonauts(limit));
    }
    console.log(search);
  }, [dispatch, search]);

  return (
    <Container sx={{ pb: 5 }}>
      <h1>Lista de Psiconautas</h1>
      <Box
        sx={{
          maxWidth: "100%",
          mb: 4,
        }}
      >
        <TextField
          id="filled-basic"
          label="Search..."
          variant="filled"
          fullWidth
          value={search}
          onChange={changeSearch}
        />
      </Box>
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
