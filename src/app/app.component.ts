import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from './app.reducers';

// import { DecrementarAction, IncrementarAction } from './contador/contador.actions';
import * as fromContador from './contador/contador.actions'

//Crear Interface
// interface AppState {
//   contador: number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  //importar el Store como si fuese un servicio
  constructor(private store: Store<AppState>) {
    // this.contador = 10;

    //RECIBO TODOS los parametros o valores del State:
    //Me subscribo a los cambios del state
    // this.store.subscribe(state => {
    //   this.contador = state.contador;
    //   console.log(state);
    // });

    //RECIBO SOLO los parametros o valores del State que seleccione:
    //select('propiedad en state') -> para seleccionar solo un elemento/propiedad del State
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  incrementar() {
    // this.contador++;

    //Creo una accion y la mando al store
    // const action: Action = {
    //   type: 'INCREMENTAR'
    // }
    const accion = new fromContador.IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    // this.contador--;

    //Creo una accion y la mando al store
    // const action: Action = {
    //   type: 'DECREMENTAR'
    // }
    const accion = new fromContador.DecrementarAction();
    this.store.dispatch(accion);
  }

}
