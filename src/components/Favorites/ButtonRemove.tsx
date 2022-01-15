import { useState } from "react";
import Button from "@mui/material/Button";
import { psychonautExample } from "../../components/Favorites/mock";
import { Psychonaut } from "../../models/psychonaut.model";

export default function ButtonRemove(props: any) {
  return (
    <Button
      sx={{ marginLeft: 2 }}
      variant="contained"
      size="small"
      onClick={() => props.removePsy(props.id)}
      data-testid="button_remove"
      color="error"
    >
      Remove
    </Button>
  );
}
