import { Action } from "@ngrx/store";

//Tipo de accion se dispara = Contador
export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESET = '[Contador] Reset';


export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR;
    //Para recibir un argumento o valor para multiplicar por el valor del contador
    constructor(public payload: number) { }
}

export class DividirAction implements Action {
    readonly type = DIVIDIR;
    //Para recibir un argumento o valor para multiplicar por el valor del contador
    constructor(public payload: number) { }
}

export class ResetAction implements Action {
    readonly type = RESET;
}

//Para poder recibir el valor o payload en contador.reducer.ts
export type actions = IncrementarAction | DecrementarAction | MultiplicarAction | DividirAction | ResetAction;