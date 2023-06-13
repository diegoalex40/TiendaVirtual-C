import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "YAVIRAC";
  titulo = "Tienda Virtual";
  imagen = "https://source.unsplash.com/random";

  Empresa = "IST YAVIRAC";
  age = 20;
  habilitado = true;

  person = {
    name2 : "Alex",
    age2 : 30,
    avatar : "https://thumbs.dreamstime.com/b/icono-masculino-del-avatar-en-estilo-plano-icono-masculino-del-usuario-avatar-del-hombre-de-la-historieta-91462914.jpg"
  }

  buttonClick($event: Event) {
    console.log($event);
  }

  toggleButton(){
    this.habilitado = !this.habilitado;
  }

  increaseAge(){
    this.age += 1;
  }

  increaseAge2(){
    this.person.age2 += 1;
  }

  onScroll(event : Event){
    const element = event.target as HTMLInputElement;
    console.log(element.scrollTop);
  }

  changeName(event : Event) {
    const element = event.target as HTMLInputElement;
    this.person.name2 = element.value;
  }

  myArray: string[] = [
   "Diana",
   "Carla",
   "Matias",
   "Juan",
   "Kevin"
  ]
}
