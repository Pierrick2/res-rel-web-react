import { BehaviorSubject, Observable } from "rxjs";
import FiltreEntity from "../ressources/models/FiltreEntity";

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
