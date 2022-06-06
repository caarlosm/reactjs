import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {

  //placeholder poster when not found (w/ custom color and text)
  const IMG_NOTFOUND = "https://via.placeholder.com/248x368/000000/00FFFF/?text=NO+POSTER+FOUND";

  //target URL on poster and button clicks
  const TARGET_URL = "https://kanto.legiaodosherois.com.br/w1200-h629-gnw-cfill-q95/wp-content/uploads/2017/06/legiao_1MgyxLXU_nAZm9NvGTHWcsRoJ4a30uE6PO2fj7rqQz.jpg.jpeg";
  

  //open URLS in a new tab
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="movie" key={imdbID} >
      {/* -----------------------top--------------------------- */}
      <div>
        <p>{Year}</p>
      </div>

      {/* ----------------------image-------------------------- */}
      <div>
        <img
          //if no poster is found, use placeholder
          src={Poster !== "N/A" ? Poster : IMG_NOTFOUND}
          alt={Title}
          //adds onClick to each movie poster (replace title spaces for '+')
          onClick={() => openInNewTab(TARGET_URL + Title.replace(/\s/g,'+'))}
          />
      </div>
      
      {/* ----------------------bottom------------------------- */}
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        <button className="imdb-button" onClick={() => openInNewTab(IMDB_URL + imdbID)}>IMDB</button>
      </div>
    </div>
  );
}

export default MovieCard;