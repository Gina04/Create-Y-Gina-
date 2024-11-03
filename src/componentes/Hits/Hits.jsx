import { Highlight } from "react-instantsearch";
import { Link } from "react-router-dom";
const Hit = (props) => {
  console.log(props)
  return (
    <div className={`mb-4 ${props.isHeader ? 'flex' : ''}`}>
      <Link to={`/FurnitureDetail/${props.hit.objectID}`}>
        <img alt={props.hit.title} src={props.hit.img}
         // Cambia la clase según el valor de isHeader
         className={`${
          props.isHeader ? "w-1/2 h-auto" : "w-full h-auto"
        }`}
        ></img>
        <div className="title mt-2">
          <Highlight
            attribute="title"
            hit={props.hit}
            tagName="mark"
            nonHughlightedTagName="span"
          ></Highlight>
        </div>
        <div className="price text-lg font-bold mt-1">${props.hit.price}</div>
      </Link>

      {/* Botón de 'Add to cart' - Solo si no está en el header */}
      {!props.isHeader && (
      <button
        className="snipcart-add-item mt-2 bg-[#1f2937]  text-white px-4 py-2 rounded hover:bg-[#374151]"
        data-item-id={props.hit.objectID}
        data-item-name={props.hit.title}
        data-item-price="23"
        data-item-description={props.hit.description}
        data-item-image={props.hit.img}
        data-item-url= "/"
        
      >
        Add to cart
      </button>
      )}
    </div>
      
  );
};

export default Hit;
