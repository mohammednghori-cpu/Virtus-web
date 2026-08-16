import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
export const metadata: Metadata = {
  metadataBase: new URL('https://www.virtusda.com'),
  title: { default: 'Virtus Defence & Aerospace | Defence Electronics, Rugged Computing & Engineering Solutions', template: '%s | Virtus Defence & Aerospace' },
  description: 'Virtus Defence & Aerospace is an Indian defence and aerospace technology company providing indigenous design, system engineering, rugged electronics, embedded computing, mechanical solutions, manufacturing, testing and mission-critical products.',
  keywords: ['Virtus Defence & Aerospace','defence electronics India','aerospace electronics India','rugged electronics','rugged chassis','VPX chassis','VME chassis','cPCI chassis','VPX backplanes','VME backplanes','embedded computing','FPGA cards','SBC','GPGPU','SFPDP','COM Express','rugged servers','rugged monitors','rugged panel PC','operator consoles','LRUs','Ethernet switches','TEC units','transit cases','mechanical enclosures','defence manufacturing','build to print','system integration','PCB design','FPGA hardware design','mechanical design','testing and qualification','thermal analysis','structural analysis','Bengaluru defence company'],
  alternates: { canonical: 'https://www.virtusda.com/' },
  openGraph: { type: 'website', url: 'https://www.virtusda.com/', title: 'Virtus Defence & Aerospace', description: 'Indigenous design, engineering, manufacturing and rugged electronics for mission-critical defence, aerospace, homeland security and industrial applications.', siteName: 'Virtus Defence & Aerospace' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } }
};
const jsonLd = { '@context':'https://schema.org','@graph':[
  {'@type':'Organization','@id':'https://www.virtusda.com/#organization',name:'Virtus Defence & Aerospace Private Limited',url:'https://www.virtusda.com/',logo:'https://www.virtusda.com/virtus-logo.jpg',telephone:['+91-7019926676','+91-9380586656'],address:{'@type':'PostalAddress',streetAddress:'3013/7, 3rd Floor, Simha Arcade, MKK Road, Gayathri Nagar, Rajajinagar',addressLocality:'Bengaluru',addressRegion:'Karnataka',postalCode:'560021',addressCountry:'IN'}},
  {'@type':'WebSite','@id':'https://www.virtusda.com/#website',url:'https://www.virtusda.com/',name:'Virtus Defence & Aerospace',publisher:{'@id':'https://www.virtusda.com/#organization'}}
]};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/><main>{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>}
