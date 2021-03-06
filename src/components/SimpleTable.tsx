import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DetailsModal from "./DetailsModal/DetailsModal";
import { Psychonaut } from "../models/psychonaut.model";
import { PsyPowers } from "../models/psyPowers.model";
import ButtonFavorite from "../components/Favorites/ButtonFavorite";
import ButtonRemove from "../components/Favorites/ButtonRemove";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SimpleTable(props: any) {
  const [open, setOpen] = useState(false);
  const [powers, setPowers] = useState<PsyPowers[]>([]);

  const handleOpen = (powers: PsyPowers[]) => {
    setOpen(true);
    setPowers(powers);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      {open && (
        <DetailsModal open={open} handleClose={handleClose} data={powers} />
      )}

      {props.rows.length > 0 ? (
        <TableContainer component={Paper} data-testid="table_container">
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.map((row: any) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <img src={row.img} alt="avatar image" width="50" />
                  </TableCell>
                  <TableCell
                    align="right"
                    component="th"
                    scope="row"
                    role="psychonaut_name"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleOpen(row.psiPowers)}
                      data-testid="button_view"
                    >
                      Powers
                    </Button>
                    {props.removePsy != null ? (
                      <ButtonRemove removePsy={props.removePsy} id={row._id} />
                    ) : (
                      <ButtonFavorite selectPsy={props.selectPsy} row={row} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box component="div">
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Psychonaut n??o encontrado!
          </Typography>
        </Box>
      )}
    </>
  );
}
