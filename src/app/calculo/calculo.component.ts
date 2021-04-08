import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
const algebrite: any = require("algebrite");

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  @Input() data: string = "";
  polinomio: string = "";
  equation: Array<string> = [];
  isValido: boolean = false;

  constructor(private snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }

  ngOnChanges() {
    if (!this.data) {
      return;
    }

    this.polinomio = this.data;

    let results: string = algebrite.run(`nroots(${this.polinomio})`);

    if (results.indexOf("Stop") != -1) {
      this.snackBar.open(
        "❌ Ha ingresado datos invalidos, por favor, revise de nuevo los datos.",
        "Cerrar",
        {
          duration: 6000
        }
      );
      this.isValido = false;
      return;
    }

    this.isValido = true;

    // Removiendo [ ], ... y tomando solo 3 decimales
    results = results.replace(/(?:\d{3}|)[.]{3}(?:\*|)/gm, "");
    results = results.replace(/[\[\]]/gm, "");
    this.equation = results.split(/,/gm);
    this.equation = this.equation.map((val, i) => val = `x_{${i}}=${val}`);

  }

}