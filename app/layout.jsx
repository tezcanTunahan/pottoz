import "@/styles/global.scss";
import { Ubuntu } from "next/font/google";

export const metadata = {
  title: "Layout",
  description: "This is the layout",
};
const ubuntu = Ubuntu({
  weight: "500",
  subsets: ["latin"],
});

export default function layout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  );
}
