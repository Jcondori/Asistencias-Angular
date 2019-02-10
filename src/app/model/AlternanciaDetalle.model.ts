import {Alternancia} from './Alternancia.model';
import {Alumno} from './Alumno.model';
import {Monitor} from './Monitor.model';
import {Responsable} from './Responsable';

export class AlternanciaDetalle {
  codaltdet: number;
  comaltdet: string;
  estaltdet: string;
  fecmonitoreo: string;
  obsmonitoreo: string;
  alternancia: Alternancia;
  alumno: Alumno;
  monitor: Monitor;
  responsable: Responsable;
}
