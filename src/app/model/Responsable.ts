import {Empresa} from './Empresa.model';
import {Ubigeo} from './Ubigeo.model';

export class Responsable {
  codRes: number;
  dniRes: string;
  nomRes: string;
  areaRes: string;
  celRes: string;
  telRes: string;
  emailRes: string;
  dirRes: string;
  estRes: string;
  carRes: string;
  empresa: Empresa;
  ubigeo: Ubigeo;
}
