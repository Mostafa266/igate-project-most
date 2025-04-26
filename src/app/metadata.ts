// app/metadata.ts
import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Novara | Style with Luxury Fashion',
  description:
    'Discover Novara, where style meets luxury. Shop premium fashion pieces crafted for elegance and sophistication.',
  keywords: [
    'Novara',
    'Luxury Fashion',
    'Premium Clothing',
    'High-End Fashion',
    'Elegant Apparel',
    'Designer Wear',
  ],
  authors: [{ name: 'Novara' }],
  creator: 'Novara',
  openGraph: {
    title: 'Novara | Style with Luxury Fashion',
    description:
      'Explore Novara\'s exclusive luxury fashion collection designed for refined tastes.',
    url: 'https://your-website.com',
    siteName: 'Novara',
    images: [
      {
        url: 'https://your-website.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Novara Luxury Fashion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novara | Style with Luxury Fashion',
    description:
      'Elevate your wardrobe with Novara\'s luxurious fashion selections.',
    images: ['https://your-website.com/og-image.jpg'],
    creator: '@Novara',
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
};

export default metadata;
