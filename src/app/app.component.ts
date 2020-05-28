import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  titulo = 'UNO - Nómina de Usuarios';
  showTests =  false;
  data$: Observable<any>;

  constructor(
    private router: Router
  ){

  }

  navegarAUsuarios(e) {
    console.log('buscar usuarios: NAVEGAR')
    this.router.navigate(["/usuarios/listar"]);
    
  }

  testRxjs(e){
    console.log('rxjs test BEGIN')
    //this.operadoresDeCreacion();
    //this.mapOperator(e);
    this.observablesEjemploBasico();
  }

  // https://jsbin.com/wamixip/edit?js,console,output
  observablesEjemploBasico(){
    let observable = new Observable(function subscribe(observer){
      let count = 0;

      setInterval(() =>{
        count += 100;

        observer.next(count);
        if(count>400){
          observer.complete();
        }

      }, 500);

    });

    this.data$= observable;
    this.showTests = true;

    let subscription1 = observable.subscribe(x => {
      console.log('suscripcion con funcion: '+ x);

    });
    /******* 
     * Variante pasando un objeto con tres métodos:
     * next(); error(); complete()
     */
    let subscription2 = observable.subscribe({
      next(x){
        console.log('Variante-2: '+ x);
      },
      error(err){
        console.log('variante-2: ')
      },
      complete(){
        console.log('observable COMPLETE');
      }

    })


  }

  operadoresDeCreacion(){
    let observable = map((x:number) => (x * 5)) (of(1,4,3));

    //(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

    observable.subscribe(x => {
      console.log(x);
    })
  }

  mapOperator(e:any){
    let observable = map((x:any) => x.clientX)(of(e));

    //(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

    observable.subscribe(x => {
      console.log(x);
    })
  }

}
