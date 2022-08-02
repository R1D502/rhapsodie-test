import { createContext } from "react";
import { Label, League } from "../hook/api/types";

export interface AppContext {
  leagues: League[];
  setCurrentLeague: (league: League) => void;
  currentLeague: League | undefined;
  currentLabelAndLabelProfits: Label | undefined;
}

const appContext: AppContext = {
  currentLabelAndLabelProfits: undefined,
  leagues: [],
  setCurrentLeague: () => undefined,
  currentLeague: undefined,
};

export const AppCTX = createContext<AppContext>(appContext);
