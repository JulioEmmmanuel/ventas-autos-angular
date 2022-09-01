import { Component, OnInit } from "@angular/core";
import { Auto } from "src/app/datos/auto";
import { AutosService } from "src/app/shared/autos.service";


@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html"
})

export class ListaAutosComponent implements OnInit{
    tituloListaAutos: string = "Lista de automóviles";
    
    listaAutos: Auto[] = [];
    muestraImagen: boolean = false;

    imageWidth = 200;
    imageMargin = 5;

    private _filtro: string="fill";
    listaAutosFiltrados: Auto[] = [];
    
    get filtro(): string{
        return this._filtro;
    }

    set filtro(filtro: string){
        this._filtro = filtro;
        this.filtraAutos(filtro);
    }

    filtraAutos(filtraPor: string):void{
        filtraPor=filtraPor.toLocaleLowerCase();
        this.listaAutosFiltrados=this.listaAutos.filter((auto:Auto)=>auto.marca.toLocaleLowerCase().includes(filtraPor))
    }

    onClickCalificacion(mensaje:string):void{
        alert("Dieron click en la calificacion: " + mensaje);
    }

    ngOnInit(): void{
        this.listaAutos = this._autosService.obtenListaAutos();
        this.listaAutosFiltrados = this.listaAutos;
    }

    toggleImage(): void {
        this.muestraImagen = !this.muestraImagen;
    }

    constructor(private _autosService: AutosService){  
    }
   



}