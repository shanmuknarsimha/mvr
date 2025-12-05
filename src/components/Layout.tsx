import { ReactNode } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Mango Village Resorts`;
    }
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF7E3]">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 w-full lg:w-auto">
          {children}
        </main>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
