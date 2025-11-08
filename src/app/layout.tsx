
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SocialBar from '@/components/layout/SocialBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://rajkotstartupstudio.com'),
  title: {
    default: 'Rajkot Startup Studio | Innovation & Entrepreneurship in Gujarat',
    template: '%s | Rajkot Startup Studio',
  },
  description: 'Rajkot Startup Studio, a center by PIERC, Parul University, empowers innovators and entrepreneurs in Gujarat. We offer incubation, mentorship, co-working spaces, and resources to build, launch, and scale successful startups.',
  keywords: ['startup studio', 'Rajkot', 'Gujarat', 'entrepreneurship', 'incubation center', 'co-working space', 'PIERC', 'Parul University', 'startup funding', 'mentorship'],
  openGraph: {
    title: 'Rajkot Startup Studio | Startup Incubator in Gujarat',
    description: 'Empowering innovators and entrepreneurs in Rajkot with incubation, mentorship, and resources.',
    url: 'https://rajkotstartupstudio.com',
    siteName: 'Rajkot Startup Studio',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/edc-pierc.appspot.com/o/RSS%20BLACK.png?alt=media&token=48d4da9f-1543-4c71-90c8-18fea38211a1', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Rajkot Startup Studio Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajkot Startup Studio | Innovation & Entrepreneurship in Gujarat',
    description: 'Join Rajkot\'s leading startup ecosystem. We provide the tools, network, and support to turn your idea into a thriving business.',
    creator: '@rss',
    images: ['https://firebasestorage.googleapis.com/v0/b/edc-pierc.appspot.com/o/RSS%20BLACK.png?alt=media&token=48d4da9f-1543-4c71-90c8-18fea38211a1'], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rajkotstartupstudio.com',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <meta name="google-site-verification" content="sFNTayNIsGkriK9rjtNYEJbLnLqZDKcOjP-oa82zPVU" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <SocialBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
