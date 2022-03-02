import React from "react";
import Button from "@mui/material/Button";

import { db } from "../db";

export function ClearDatabaseButton() {
  return (
    <Button
      type="submit"
      fullWidth
      color="warning"
      variant="contained"
      sx={{ mt: 1, mb: 2 }}
      onClick={() => {
        db.transaction("rw", db.tables, async () => {
          await Promise.all(db.tables.map((table) => table.clear()));
        });
      }}
    >
      Clear Database
    </Button>
  );
}
