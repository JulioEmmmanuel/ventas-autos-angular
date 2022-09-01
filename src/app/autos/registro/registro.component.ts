import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  tituloPagina = "Registro del cliente";
  deseaContacto = false;
  cliente = {
    nombre: "",
    password: "",
    correo: "",
    telefono: ""
  }

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this._router.navigate(["/inicio"]);
  }

  toggleContacto(): void {
    this.deseaContacto = !this.deseaContacto
  }

  registra(): void {
    alert("En construcción");
    this._router.navigate(["/autos"]);
  }
}
