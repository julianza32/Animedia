import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from  '../../services/usuario.service';
import {Router, ActivatedRoute,Params} from '@angular/router' 
//'../../services/usuario.service';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})

export class RegistroUsuarioComponent implements OnInit {
  public usuarioModel: Usuario;
  public url:String;

  @ViewChild('tyc') tyc: ElementRef;

  constructor(private usuarioService: UsuarioService,private _router:Router) {
    this.usuarioModel= new Usuario('','','',0,new Date,'','','','');
   }

  ngOnInit(): void {
  }
  validarFormulario(){
  if(this.tyc.nativeElement.checked){
    this.registrarUsuario();
  }else{
    alert("Por favor Acepta terminos y condiciones");
  }
  }

  registrarUsuario(){
    this.usuarioService.registarUsuario(this.usuarioModel).subscribe(
      (response:any)=>{
        if(response.user){
        let usuario = response.user;
        this.usuarioService=usuario;
        if(!usuario._id){
          alert("Error al registrate");
        }else{
          alert(`Te registraste correctamente! inicia sesion con ${usuario.email}`);
          this.usuarioModel= new Usuario('','','',0,new Date,'','','','');
          this._router.navigate(['/home']);
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
