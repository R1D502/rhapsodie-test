import { AppCTX } from "./AppContext";
import { useAppProvider } from "./useAppProvider.hook";

export const AppProvider: React.FunctionComponent<{ children: any }> = ({ children }) => {
  const appState = useAppProvider();
  return <AppCTX.Provider value={appState}>{children}</AppCTX.Provider>;
};
