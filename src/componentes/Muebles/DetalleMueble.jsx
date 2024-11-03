import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";

// Inicializa Algolia
const client = algoliasearch("110SRGPQQM", "5675460085896023bc029a8051dbfe25");
const index = client.initIndex("dev_ecommerce");

const DetalleMueble = () => {
  const { id } = useParams(); // Obtiene el ID del mueble desde la URL
  const [mueble, setMueble] = useState(null); // Guarda el mueble encontrado
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga

  // Función para obtener el mueble por ID utilizando una búsqueda
  const fetchMueble = async (id) => {
    try {
      const result = await index.search("", {
        filters: `objectID:${id}`, // Filtra por objectID
      });
      if (result.hits.length > 0) {
        setMueble(result.hits[0]); // Guarda el primer resultado en el estado
      } else {
        console.error("No se encontró el mueble con ese ID.");
      }
      setLoading(false); // Deja de mostrar el indicador de carga
    } catch (error) {
      console.error("Error al obtener el mueble:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMueble(id); // Llama a la función para buscar el mueble cuando el componente se monta
  }, [id]);

  // Si está cargando, muestra un mensaje
  if (loading) {
    return <div>Cargando detalles del mueble...</div>;
  }

  // Si no se encuentra el mueble, muestra un mensaje de error
  if (!mueble) {
    return <div>Error: No se pudo encontrar el mueble.</div>;
  }

  // Renderiza los detalles del mueble encontrado
  return (
    <div className="mueble-detalle max-w-2xl mx-auto text-center p-4">
      <h1 className="text-2xl font-bold mb-4">{mueble.title}</h1>
      <img
        src={mueble.img}
        alt={mueble.title}
        className="w-full h-auto max-w-lg mx-auto mb-4"
      />
      <p className="text-lg font-semibold">Precio: ${mueble.price}</p>
      <p className="mt-2">{mueble.description}</p>

      <button
        className="snipcart-add-item mt-2 bg-[#1f2937]  text-white px-4 py-2 rounded hover:bg-[#374151]"
        data-item-id={mueble.objectID}
        data-item-name={mueble.title}
        data-item-price="23"
        data-item-description={mueble.description}
        data-item-image={mueble.img}
        data-item-url= "/"
        
      >
        Add to cart
      </button>


    </div>
  );
};

export default DetalleMueble;
