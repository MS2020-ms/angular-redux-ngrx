import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  // @Input() contador: number;
  // @Output() contadorReset = new EventEmitter<number>();

  contador: number;

  //Inyectar el Store
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //Subscribirme a los cambios del 'contador' en el state -> con .select()
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    })
  }

  reset() {
    // this.contador = 0;
    // this.contadorReset.emit(0);

    const accion = new ResetAction();
    this.store.dispatch(accion);
  }

}
