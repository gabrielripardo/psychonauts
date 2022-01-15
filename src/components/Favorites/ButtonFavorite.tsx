import { useState } from "react";
import Button from "@mui/material/Button";
import { psychonautExample } from "../../components/Favorites/mock";
import { Psychonaut } from "../../models/psychonaut.model";

export default function ButtonFavorite(props: any) {
  return (
    <Button
      sx={{ marginLeft: 2 }}
      variant="contained"
      size="small"
      onClick={() => props.selectPsy(props.row)}
      data-testid="button_add"
      color="warning"
    >
      Add
    </Button>
  );
}
