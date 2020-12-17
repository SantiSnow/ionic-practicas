import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.page.html',
  styleUrls: ['./places-detail.page.scss'],
})
export class PlacesDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRouter: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap=>{
      const idSeleccionado = paramMap.get('placeId');

      const idRecibido = parseInt(idSeleccionado, 10);

      this.place = this.placesService.getPlace(idRecibido);
    });
  }

}
