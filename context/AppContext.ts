import { createContext } from "react";
import { League } from "../hook/api/types";

export interface AppContext {
  setCurrentLeague: (league: League) => void;
  currentLeague: League | undefined;
}

const appContext: AppContext = {
  setCurrentLeague: () => undefined,
  currentLeague: undefined,
};

export const AppCTX = createContext<AppContext>(appContext);
