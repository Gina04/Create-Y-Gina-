import algoliasearch from "algoliasearch/lite";
import employees from "./furniture.json";
import React, { useState, useEffect } from "react";
import { Hits, InstantSearch, SearchBox, Stats,useInstantSearch,Configure } from "react-instantsearch";
import Hit from "../Hits/Hits";
import './Search.css'
// API Keys de Algolia
const REACT_APP_ALGOLIA_API_SEARCH_KEY = "5675460085896023bc029a8051dbfe25"; // Asegúrate de que estas son las credenciales correctas
const REACT_APP_ALGOLIA_APP_ID = "110SRGPQQM";

// Conexión con Algolia
const client = algoliasearch(
  REACT_APP_ALGOLIA_APP_ID,
  REACT_APP_ALGOLIA_API_SEARCH_KEY
);

const index = client.initIndex("dev_ecommerce");

//SAVE MANY
const saveMany = async () => {
  const result = await index.saveObjects(employees, {
    autoGenerateObjectIDIfNotExist: true,
  });
  console.log("ACA va el nuevo Json",result);
};

function EmptyQueryBoundary({ children, fallback }) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

function Search() {

  return (
    <div className="relative ">
    <InstantSearch searchClient={client} indexName="dev_ecommerce">
      <SearchBox className="search-box w-full m-0"/>
      <Configure hitsPerPage={5} /> {/* Limita los hits a 5 */}
      <div className="absolute z-10 bg-white">
      <EmptyQueryBoundary fallback={null}>
      <Hits hitComponent={(props) => <Hit {...props} isHeader={true} />} />
      </EmptyQueryBoundary>
      </div>
    </InstantSearch>
   
  </div>
   
  );
  
  
}

//saveOne().catch(err=> concole.log(err));

//saveMany().catch((err) => console.log(err));
export default Search;
