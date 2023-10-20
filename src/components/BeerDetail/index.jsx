import React from 'react';
import { useParams } from 'react-router-dom';


// Al mount del component, fare un CORRETTO data fetching, gestire loading state ed errore (scritta loading, scritta error)
// fa un get con fetch https://api.punkapi.com/v2/beers/<id della birra>, l'id della birra e' un parametro nella path
// gia estratto con useParams
// la birra recuperata deve essere mostrata
// mostrare l'immagine in un tag <img href giusto, (nel json l'immagine della birra e' sulla proprieta' image_url)
// mostrare 3 paragrafi che mostrino ID, nome, descrizione e tagline della birra fetchata, prelevando le proprieta' dal json
// verificare che cio' funzioni con birre diverse

function BeerDetail() {
  const { beerId } = useParams();
  return <p>{beerId}</p>;
}

export default BeerDetail;
