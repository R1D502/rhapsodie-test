import { createContext } from "react";
import { Label, League, Signature } from "../hook/api/types";

export interface AppContext {
  leagues: League[];
  setCurrentLeague: (league: League) => void;
  currentLeague: League | undefined;
  currentLabelAndLabelProfits: Label | undefined;
  currentSignatureAndArtist: Signature[];
}

const appContext: AppContext = {
  currentLabelAndLabelProfits: undefined,
  leagues: [],
  setCurrentLeague: () => undefined,
  currentLeague: undefined,
  currentSignatureAndArtist: [],
};

export const AppCTX = createContext<AppContext>(appContext);
