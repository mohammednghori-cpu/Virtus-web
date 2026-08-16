# Virtus Defence & Aerospace — Advanced Website

## Stack
Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide React

## Product image system
Every product has a dedicated image path in `data/products.ts`.
Add your product image files to:

`public/products/`

using the exact filename below:

- backplanes.jpg
- motherboards.jpg
- com-express.jpg
- fpga-cards.jpg
- mechanical-enclosures.jpg
- transit-case.jpg
- racks-subracks.jpg
- pdu-power.jpg
- processing-units.jpg
- rugged-chassis.jpg
- lrus.jpg
- ethernet-switch.jpg
- rugged-monitor.jpg
- rugged-panel-pc.jpg
- operator-consoles.jpg
- rugged-tablet-laptop.jpg
- tec-unit.jpg
- customized-products.jpg
- box-pc.jpg
- rugged-server.jpg
- workstation.jpg
- panel-pc.jpg
- nas.jpg
- industrial-pc.jpg

You can use `.png` or `.webp` instead, but update the matching `image:` field in `data/products.ts`.

No code changes are needed after you replace the image files with the same names.

## Product detail pages
Each product automatically gets a page:

`/products/<slug>`

Example:
`/products/rugged-chassis`

## Suggested product photography
Use consistent images:
- neutral or dark technical background
- 4:3 or 16:10 framing
- clear front/3-quarter view
- no watermark
- ideally the same camera angle/lighting across a product family

## Client logos
Keep official approved assets under `public/clients/`.
Update `components/ClientLogos.tsx` with the exact filenames.

## Run
```powershell
npm install
npm run dev
```

## Production
```powershell
npm run build
npm start
```


## Product content source
The product names, descriptions and basic details in `data/products.ts` were prepared from the supplied Virtus company profile. No unsupported technical specifications, ratings, certifications or performance figures have been added.
