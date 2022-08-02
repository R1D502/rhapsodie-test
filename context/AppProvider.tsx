import { League } from "../hook/api/types";
import { AppCTX } from "./AppContext";
import { useAppProvider } from "./useAppProvider.hook";

export const AppProvider: React.FunctionComponent<{ children: any; leagues: League[] }> = ({ children, leagues }) => {
  const appState = useAppProvider(leagues);
  return <AppCTX.Provider value={appState}>{children}</AppCTX.Provider>;
};
