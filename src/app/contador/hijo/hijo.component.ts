import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { DividirAction, MultiplicarAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();

  contador: number;

  //Inyectar el Store
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    //Subscribirme a los cambios del 'contador' en el state -> con .select()
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
      console.log(contador);
    })

  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);

    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);

    const accion = new DividirAction(5);
    this.store.dispatch(accion);
  }

  resetNieto(nuevoContador) {
    this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }

}
