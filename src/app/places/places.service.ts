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
        interests: ["Santiago de Chile", "Cordillera de los Andes"]
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
      },
      {
        id: 6,
        name: "España",
        continent: "Europe",
        img: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1590433945804-NBB6WI04I43LY23VC2EC/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/ciudades-mas-bonitas-espana.jpg?format=1500w",
        interests: ["Madrid", "Barcelona", "Canarias", "Asturias", "Andalucia", "Galicia", "País Vasco", "León"]
      },
      {
        id: 7,
        name: "France",
        continent: "Europe",
        img: "https://i2.wp.com/ismaelmartin.com/wp-content/uploads/2017/06/festivales-franceses.jpg?w=650&ssl=1",
        interests: ["París", "Eiffel Tower", "Lyon", "Niza", "Nantes", "Arc of Triumph", "Orleans"]
      },
      {
        id: 8,
        name: "Italy",
        continent: "Europe",
        img: "https://www.ef.com.ar/sitecore/__/~/media/universal/pg/8x5/destination/IT_00_00_1.jpg",
        interests: ["Roma", "Pisa", "Coliseum", "Sicilia", "Turim", "Milán", "Giuseppe Meazza Stadium", "Venecia"]
      },
      {
        id: 9,
        name: "Japon",
        continent: "Asia",
        img: "https://www.ecestaticos.com/image/clipping/12d28e3286430223bee40c6c4074ccac/las-soluciones-que-esta-empleando-japon-para-combatir-la-despoblacion.jpg",
        interests: ["Tokio", "Kioto", "Mount Fuji", "Osaka", "Yokohama", "Kyushu", "Train Shinkansen", "Osaka Forest"]
      },
      {
        id: 10,
        name: "Australia",
        continent: "Oceania",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Australia_Day.jpg",
        interests: ["Sidney", "Canberra", "Melbourne", "Gold Coast", "Brisbane", "Perth", "Byron Bay"]
      }
    ];  

  constructor() { }

  getPlace(placeId: number){
    return{
      ...this.places.find(place => {
        return place.id === placeId;
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

  deletePlace(placeId: number){
    this.places = this.places.filter(place =>{
      return place.id !== placeId;
    })
  }

  updatePlace(){

  }
}
