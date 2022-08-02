import { useContext } from "react";
import { AppContext, AppCTX } from "./AppContext";

export const useApp = (): AppContext => {
  return useContext(AppCTX);
};
