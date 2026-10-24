import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./site.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BackTop } from "@/components/BackTop";
import { SiteEffects } from "@/components/SiteEffects";
import { SmoothScroll } from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Consulting Growth 360",
    template: "%s | Consulting Growth 360",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1420",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <SmoothScroll>
          <a className="skip" href="#main">
            Skip to content
          </a>
          <SiteEffects />
          <SiteNav />
          {children}
          <SiteFooter />
          <BackTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
