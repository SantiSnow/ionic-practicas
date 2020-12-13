import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  //datos que simulan una peticion http

  private places = [
    {
      id: 1,
      name: "Argentina",
      continent: "Latin America",
      img: "https://d2v9ipibika81v.cloudfront.net/uploads/sites/26/BSAs-Southern-Cone-Trade-Mission-1140x684.png"
    },
    {
      id: 2,
      name: "Uruguay",
      continent: "Latin America",
      img: "https://www.caracteristicas.co/wp-content/uploads/2018/07/uruguay-1-e1573265526917.jpg"
    },
    {
      id: 3,
      name: "Chile",
      continent: "Latin America",
      img: "https://www.caracteristicas.co/wp-content/uploads/2018/09/chile-e1578422954245.jpg"
    },
    {
      id: 4,
      name: "Brasil",
      continent: "Latin America",
      img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/08/19/15662379573521.jpg"
    },
    {
      id: 5,
      name: "Mexico",
      continent: "Latin America",
      img: "https://exportou.com/wp-content/uploads/2018/12/MEXICO-768x522.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
