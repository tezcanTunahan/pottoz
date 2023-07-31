import "@/styles/global.scss";
import { Ubuntu } from "next/font/google";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Layout",
  description: "This is the layout",
};
const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export default function layout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body suppressHydrationWarning={true}>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
