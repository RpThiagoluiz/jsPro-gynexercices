import { BoxTypeMap as MuiBox } from "@mui/material/Box";

declare module "@mui/material/Box" {
  export interface BoxTypeMap extends MuiBox {
    itemId?: string;
  }
}
