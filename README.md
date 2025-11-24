This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Manejo de imágenes y export estático

- El proyecto utiliza un `loader` personalizado en `src/lib/imageLoader.ts` para que los componentes `<Image>` funcionen con `next export` sin depender del optimizador de Vercel.
- Los dominios permitidos para imágenes remotas están configurados en `next.config.ts` (`www.corcudec.cl`, `corcudec.cl`, `drupal.elteatrodesa.cl` y `drupal.corcudec.cl`). Si se agregan nuevos orígenes, actualiza `remotePatterns` antes de usarlos.
- Para mantener las imágenes listas en una exportación estática, guarda los recursos necesarios en la carpeta `public/` o genera las versiones optimizadas previo al despliegue (por ejemplo, descargando los archivos desde Drupal al momento de preparar el build) y mantenlos sincronizados con el contenido.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
