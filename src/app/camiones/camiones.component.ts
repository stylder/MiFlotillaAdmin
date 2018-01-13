import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-camiones',
  templateUrl: './camiones.component.html',
  styleUrls: ['./camiones.component.scss']
})
export class CamionesComponent implements OnInit {

  camiones = [
    {
      identificador: 100,
      numero_economico: 'ECO100',
      placas: 'XAKADSFASDF',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Fuso_Canter_3C13%2C_8th_Generation.jpg/220px-Fuso_Canter_3C13%2C_8th_Generation.jpg'
    },
    {
      identificador: 101,
      numero_economico: 'ECO101',
      placas: 'PLACAS2123',
      img: 'http://www.cuentosinfantilescortos.net/wp-content/uploads/2014/10/cuento-infantil-camion-que-comia-espinacas.jpg'
    },
    {
      identificador: 101,
      numero_economico: 'ECO101',
      placas: 'PLACAS2123',
      img: 'http://www.cuentosinfantilescortos.net/wp-content/uploads/2014/10/cuento-infantil-camion-que-comia-espinacas.jpg'
    },
    {
      identificador: 101,
      numero_economico: 'ECO101',
      placas: 'PLACAS2123',
      img: 'http://www.cuentosinfantilescortos.net/wp-content/uploads/2014/10/cuento-infantil-camion-que-comia-espinacas.jpg'
    },
    {
      identificador: 101,
      numero_economico: 'ECO101',
      placas: 'PLACAS2123',
      img: 'http://www.cuentosinfantilescortos.net/wp-content/uploads/2014/10/cuento-infantil-camion-que-comia-espinacas.jpg'
    },
    {
      identificador: 101,
      numero_economico: 'ECO101',
      placas: 'PLACAS2123',
      img: 'http://www.cuentosinfantilescortos.net/wp-content/uploads/2014/10/cuento-infantil-camion-que-comia-espinacas.jpg'
    },
    {
      identificador: 101,
      numero_economico: 'ECO101',
      placas: 'PLACAS2123',
      img: 'http://www.cuentosinfantilescortos.net/wp-content/uploads/2014/10/cuento-infantil-camion-que-comia-espinacas.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
