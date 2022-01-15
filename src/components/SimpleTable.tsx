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

export default function SimpleTable(props: any) {
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState<Psychonaut[]>([]);

  const handleOpen = (row: Psychonaut[]) => {
    setOpen(true);
    setRow(row);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      {open && (
        <DetailsModal open={open} handleClose={handleClose} data={row} />
      )}

      <TableContainer component={Paper} data-testid="table_container">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">gender</TableCell>
              <TableCell align="right">Powers</TableCell>
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
                    onClick={() => handleOpen(row)}
                    data-testid="button_view"
                  >
                    Powers
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
