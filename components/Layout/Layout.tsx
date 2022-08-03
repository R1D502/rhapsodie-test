import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="md:w-3/6 md:m-auto">{children}</main>
      <Footer />
    </div>
  );
};
