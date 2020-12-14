import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

    //datos que simulan una peticion http

    private places: Place[] = [
      {
        id: 1,
        name: "Argentina",
        continent: "Latin America",
        img: "https://d2v9ipibika81v.cloudfront.net/uploads/sites/26/BSAs-Southern-Cone-Trade-Mission-1140x684.png",
        interests: ["Obelisco de Bueno Aires", "Casa Rosada", "Glaciar Perito Moreno", "Cataratas del Iguazú", "Bariloche", "Aconcagua"]
      },
      {
        id: 2,
        name: "Uruguay",
        continent: "Latin America",
        img: "https://www.caracteristicas.co/wp-content/uploads/2018/07/uruguay-1-e1573265526917.jpg",
        interests: ["Montevideo", "Punta del Este", "Playa de los Dedos"]
      },
      {
        id: 3,
        name: "Chile",
        continent: "Latin America",
        img: "https://www.caracteristicas.co/wp-content/uploads/2018/09/chile-e1578422954245.jpg",
        interests: ["Santiago de Chile", "Cordillera"]
      },
      {
        id: 4,
        name: "Brasil",
        continent: "Latin America",
        img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/08/19/15662379573521.jpg",
        interests: ["Sao Pablo", "Rio de Janeiro", "Cristo Redentor", "Bahia", "Amazonas"]
      },
      {
        id: 5,
        name: "Mexico",
        continent: "Latin America",
        img: "https://exportou.com/wp-content/uploads/2018/12/MEXICO-768x522.jpg",
        interests: ["Ciudad de Mexico", "Cancún"]
      }
    ];  

  constructor() { }

  getPlace(placeId: number){
    return{
      ...this.places.find(i => {
        i.id === placeId;
      })
    }
  }

  getPlaces(){
    return [...this.places];

  }

  addPlace(name: string, continent: string, img: string, interests: string[]){
    this.places.push({
      name,
      continent,
      img,
      interests,
      id: 1 + this.places.length
    })

  }

  deletePlace(){

  }

  updatePlace(){

  }
}
