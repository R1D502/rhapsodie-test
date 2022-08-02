import { createContext } from "react";
import { League } from "../hook/api/types";

export interface AppContext {
  leagues: League[];
  setCurrentLeague: (league: League) => void;
  currentLeague: League | undefined;
}

const appContext: AppContext = {
  leagues: [],
  setCurrentLeague: () => undefined,
  currentLeague: undefined,
};

export const AppCTX = createContext<AppContext>(appContext);
