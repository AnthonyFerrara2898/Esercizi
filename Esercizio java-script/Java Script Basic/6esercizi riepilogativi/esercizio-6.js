const filmArray = [
    { titolo: "Film 1", regista: "Regista 1", anno: 2020, genere: "Azione" },
    { titolo: "Film 2", regista: "Regista 2", anno: 2021, genere: "Commedia" },
    { titolo: "Film 3", regista: "Regista 3", anno: 2020, genere: "Azione" },
    { titolo: "Film 4", regista: "Regista 4", anno: 2019, genere: "Drammatico" }
  ];
  
  function analizzaFilm(arrayDiFilm) {
    const risultato = {
      numMovies: arrayDiFilm.length,
      numYears: new Set(arrayDiFilm.map(film => film.anno)).size,
      genreCounts: {}  
    };
  
    arrayDiFilm.forEach(film => {
      if (film.genere) {  
        if (risultato.genreCounts[film.genere]) {
          risultato.genreCounts[film.genere]++;
        } else {
          risultato.genreCounts[film.genere] = 1;
        }
      }
    });
  
    console.log(risultato);
    return risultato;
  }

  analizzaFilm(filmArray);
  