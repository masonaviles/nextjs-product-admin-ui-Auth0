import type { ReactNode } from 'react';
import Nav from './components/Nav'; // Adjust the path as needed
import "./styles/globals.css";
import "./styles/styles.css";

// Assuming "Inter" font and "metadata" are used elsewhere or in a custom _document.tsx or _app.tsx
// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="grid grid-cols-[1fr_6fr] min-h-screen">
      <div className="bg-gray-800 py-9 pl-9"> {/* Assuming you want to keep the nav background */}
        <Nav />
      </div>
      <main className="bg-white">
        {children}
      </main>
    </div>
  );
}
