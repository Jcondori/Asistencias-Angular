import { Component, OnInit, ɵConsole } from '@angular/core';
import { AlternanciaService } from '../../service/alternancia.service';
import { AlternanciaDetale } from '../../model/alternanciaDetale..model';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  alternancia: any = [];

  constructor(private alternanciaService: AlternanciaService) {
    this.getcodaltdet();
  }

  ngOnInit() {
  }

  getcodaltdet() {
    this.alternanciaService.traerCodigoAltdet().subscribe(data => {
      this.alternancia =  data;
      console.log(this.alternancia);
    }
      );
  }

}
