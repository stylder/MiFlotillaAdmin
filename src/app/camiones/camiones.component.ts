import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-camiones',
  templateUrl: './camiones.component.html',
  styleUrls: ['./camiones.component.scss']
})
export class CamionesComponent implements OnInit {

  camiones = [];

  constructor() {
  }

  ngOnInit() {
    this.camiones = [
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
        img: 'https://latin-america.internationalcamiones.com/-/media/navistar/latin-america/spotlight/vocation-slider-home-page/durastar.png?h=473&w=669&la=es-PA&hash=98AFBE9C3C2547FE4E9A49BEFB9C07C7A6B84ACF'
      },
      {
        identificador: 102,
        numero_economico: 'ECO102',
        placas: 'PLACAS2123',
        img: 'https://latin-america.internationalcamiones.com/-/media/navistar/latin-america/product-cards/trucks/prostartruckcards_400x260.jpg?h=260&w=400&la=es-PA&hash=3FD4194EBB59DE92B082EEBF070A3B3C9691BFD0'
      },
      {
        identificador: 103,
        numero_economico: 'ECO103',
        placas: 'PLACAS2123',
        img: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/gallery_big/public/media/image/2016/09/572869-cascadia-156-litros-608-cv-2779-nm.jpg?itok=vIN3kKOH'
      },
      {
        identificador: 104,
        numero_economico: 'ECO104',
        placas: 'PLACAS2123',
        img: 'http://www.autopista.es/media/cache/frontend_grande/upload/images/article/106169/article-camiones-mas-vendidos-espana-2015-56a0d86f044d3.jpg'
      },
      {
        identificador: 105,
        numero_economico: 'ECO105',
        placas: 'PLACAS2123',
        img: 'https://i.ytimg.com/vi/O9VSEtGAbmw/maxresdefault.jpg'
      }
    ];
  }

}
