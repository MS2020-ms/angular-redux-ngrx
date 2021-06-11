# Inicio
>ng new redux-app
>npm install bootstrap --save
>ng serve -o
>ng g c contador/hijo --skipTests -is
>ng g c contador/nieto --skipTests -is

# Pasar data de padre a hijo -> @Input
# Pasar data de hijo a padre -> @Output - EventEmitter
Sincronizados cambios del hijo en el padre
# Pasar data de hijo a nieto -> @Input
# Pasar data de nieto a hijo -> @Output - EventEmitter
# Pasar data de nieto a hijo a padre -> @Output - EventEmitter

# IMPLEMENTA REDUX
https://github.com/ngrx/platform or
https://ngrx.io/guide/store/install
[>npm install @ngrx/store --save]
Con Angular 11:
>npm i @ngrx/store@10.1.2

# Crear State y Reducer 
Crear nuevo archivo contador/contador.reducer.ts
Importar StoreModule y contadorReducer en app.module.ts
Ir app.component.ts

# Crear Action
Crear acciones de forma controlada
Crear nuevo archivo contador/contador.actions.ts

# Implementar Store DevTools
https://ngrx.io/guide/store-devtools
>npm install @ngrx/store-devtools --save
Anadir extension para Firefox de Redux DevTools
https://addons.mozilla.org/es/firefox/addon/reduxdevtools/

Ir app.module e importar StoreDevtoolsModule

En navegador tengo extension del redux y en la consola >> redux (refresh pagina) v Chart (esquema del estado de la app) v Inspector (accionar acciones incrementar o decrementar)
Puedo hacer commit
Puedo navegar en el tiempo -> icono inf del reloj

# Escuchar cambios de un solo elemento del State
Ir a app.component.ts

# Store en el componente hijo
Ir a hijo.component.ts
Crear archivo app/app.reducers.ts

# Comunicacion del hijo al padre -> dispatch al state
Ir contador.actions.ts
Ir contador.redicer.ts
Ir hijo.ts -> dispatch

# Comunicacion del nieto a hijo y padre -> dispatch al state
Ir nieto.ts -> dispatch

# Optimización a la app
Ir a contador.reucer.ts -> optimizar importaciones
Ir a app.component.ts -> optimizar importaciones

# Efectos