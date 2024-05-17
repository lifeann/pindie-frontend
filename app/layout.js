import { App } from "./App";
import "./globals.css";

export const metadata = {
  title: "Pindie",
  description: "Портал инди-игр от студентов Яндекс-практикума",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
