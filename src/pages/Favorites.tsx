import * as React from "react";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import SimpleTable from "../components/SimpleTable";
import { Psychonaut } from "../models/psychonaut.model";
import { psychonautExample } from "../components/Favorites/mock";
import { getAll } from "../components/Favorites/StorageFarorite";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Favorites() {
  const [psychonauts, setPsychonauts] = useState<any[]>([]);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openMessage, setopenMessage] = React.useState(false);
  const [idPsy, setIdPsy] = useState();

  const handleClickMessage = () => {
    setopenMessage(true);
  };

  const handleCloseMessage = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setopenMessage(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removePsychonaut = (id: number) => {
    handleClickOpen();
    console.log("# id" + id);
  };

  const confirmRemove = () => {
    handleClose();
    handleClickMessage();
  };

  useEffect(() => {
    setPsychonauts(getAll());
    console.log("#list from local storage");
    console.log(getAll());
  }, []);

  // setPsychonauts([psychonaut]);
  return (
    <Container>
      <h1>Meus Favoritos</h1>
      <SimpleTable rows={psychonauts} removePsy={removePsychonaut} />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Deletar Psiconauta"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ao clicar em confirmar o psiconauta será deletado.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={confirmRemove} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openMessage}
        autoHideDuration={6000}
        onClose={handleCloseMessage}
      >
        <Alert
          onClose={handleCloseMessage}
          severity="success"
          sx={{ width: "100%" }}
        >
          Psiconauta deletado com sucesso!
        </Alert>
      </Snackbar>
    </Container>
  );
}
