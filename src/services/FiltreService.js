import { BehaviorSubject, Observable } from "rxjs";

class FiltreService {
  filtres = new BehaviorSubject({});

  getFiltres() {
    return this.filtres.asObservable();
  }

  setFiltres(filtres) {
    this.filtres.next(filtres);
  }
}

export default new FiltreService();
