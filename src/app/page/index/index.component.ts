import { Component, OnInit, ɵConsole } from '@angular/core';
import { AlternanciaService } from '../../service/alternancia.service';
import { AsistenciaService } from '../../service/asistencia.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  alternancia: any = [];

  constructor(private alternanciaService: AlternanciaService,private asistenciaService: AsistenciaService) {
    this.getcodaltdet();
  }

  ngOnInit() {
  }

  getcodaltdet() {
    this.alternanciaService.traerCodigoAltdet().subscribe(data => {
      this.alternancia =  data;
      console.log(this.alternancia);
      this.asistenciaService.asistencia(this.alternancia.codaltdet).subscribe(asistencia => console.log(asistencia));
    }
      );
  }

}
