
interface NoticiaPageProps {
  params: {
    id: number; 
  };
}

export function generateStaticParams() {
  return [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];
}

export default function NoticiaPage({ params }: NoticiaPageProps) {

  const { id } = params;

  if(id<1 && id>10)
    return(
      <></>
    );

  return (
    <div>
      <h1>ID de la Noticia en Pantalla</h1>
      <p>El ID obtenido de la ruta es: <strong>{id}</strong></p>
    </div>
  );
}