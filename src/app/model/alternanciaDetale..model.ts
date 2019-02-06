import { Alternancia } from './alternancia.model';
import { Ci } from './ci';
export class AlternanciaDetale {
    codaltdet: String;
    alternancia: Alternancia;
    ci: Ci;
    constructor() {
    this.alternancia = new Alternancia();
    this.ci = new Ci();
    }
}
