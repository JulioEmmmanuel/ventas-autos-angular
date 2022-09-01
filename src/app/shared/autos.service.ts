import { Injectable } from '@angular/core';
import { Auto } from '../datos/auto';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  obtenListaAutos():  Auto[] {
    let listaAutos = this._determinaListaAutos();
    return listaAutos
  }

  obtenAuto(id: number): Auto{
    return this.obtenListaAutos().find(auto => auto.id == id)!;
  }

  private _determinaListaAutos(): Auto[]{
    let listaAutos = [{
      id:1,
      imagenUrl: "../../../assets/imageAutos/red_car.jpg",
      marca: "Eagle",
      modelo: "California",
      anio: 2014,
      color: "Rojo",
      kilometros: 350,
      precio: 1000000,
      calificacion: 4.5
  }, {
      id:2,
      imagenUrl: "../../../assets/imageAutos/blue_car.jpg",
      marca: "Dodge",
      modelo: "Brisa",
      anio: 2010,
      color: "Azul",
      kilometros: 300,
      precio: 80000,
      calificacion: 3.6
  }, {
      id:3,
      imagenUrl: "../../../assets/imageAutos/gray_car.jpeg",
      marca: "Dallas",
      modelo: "Fun",
      anio: 2000,
      color: "Gris",
      kilometros: 10000,
      precio: 50000,
      calificacion: 4.2
  }, {
      id:4,
      imagenUrl: "../../../assets/imageAutos/orange-car.jpg",
      marca: "Hyundai",
      modelo: "Dynasty",
      anio: 1996,
      color: "Naranja",
      kilometros: 0,
      precio: 100000,
      calificacion: 2.3
  }, {
      id:5,
      imagenUrl: "../../../assets/imageAutos/black_car.jpeg",
      marca: "Jaguar",
      modelo: "X-F",
      anio: 2015,
      color: "Negro",
      kilometros: 150,
      precio: 50000,
      calificacion: 3.2
  }];
  return listaAutos; 
  }
}
