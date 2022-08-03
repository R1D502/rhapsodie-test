import { createContext } from "react";
import { Views } from "../components/Layout/Footer/useFooter.hook";
import { Label, League, Signature } from "../hook/api/types";

export interface AppContext {
  leagues: League[];
  setCurrentLeague: (league: League) => void;
  currentLeague: League | undefined;
  currentLabelAndLabelProfits: Label | undefined;
  currentSignatureAndArtist: Signature[];
  currentView: Views;
  onClickIconView: (view: Views) => () => void;
}

const appContext: AppContext = {
  currentLabelAndLabelProfits: undefined,
  leagues: [],
  setCurrentLeague: () => undefined,
  currentLeague: undefined,
  currentSignatureAndArtist: [],
  currentView: Views.LABEL,
  onClickIconView: () => () => undefined,
};

export const AppCTX = createContext<AppContext>(appContext);
