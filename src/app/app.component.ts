import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebas';

// PROPIEDADES  
  empresa="Google";
  usuRegistrado=false;
  TextoDeRegistro="no hay nadie registrado";

// FUNCIONES

  llamaEmpresa(value:string){
    
  }

  /*getRegistroUsuario(){
    this.usuRegistrado=false
  }*/

  setUsuarioRegistrado(event:Event){
    //alert("el usuario se registro")
    //this.TextoDeRegistro="el usuario se registro"
    if((<HTMLInputElement>event.target).value== "si"){
      this.TextoDeRegistro="el usuario se registro";
    }else{
      this.TextoDeRegistro="no hay nadie registrado";
    }
  }
}
