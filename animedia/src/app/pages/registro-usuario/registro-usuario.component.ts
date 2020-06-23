import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from  '../../services/usuario.service'; 
//'../../services/usuario.service';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  public usuarioModel: Usuario;
  public url:String;

  constructor(private usuarioService: UsuarioService) {
    this.usuarioModel= new Usuario('','','',0,new Date,'','','','');
   }

  ngOnInit(): void {
  }
  registrarUsuario(){
    this.usuarioService.registrarUsuario(this.usuarioModel).subscribe(
      (response:any)=>{
        if(response.user){
        let usuario = response.user;
        this.usuarioService=usuario;
        if(!usuario._id){
          alert("Error al registrate");
        }else{
          alert(`Te registraste correctamente! inicia sesion con ${usuario.email}`);
          this.usuarioModel= new Usuario('','','',0,new Date,'','','','');
        }
      }else{
          alert(response.messaje);
        }
      }, error=>{
        var errorMensaje = <any>error;
        if(errorMensaje !=null){
          console.log(error);
        }
      }
    );
  }
}
