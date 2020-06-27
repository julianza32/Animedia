import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  @ViewChild('informacion') display: ElementRef;
  @ViewChild('formulario') form: ElementRef;
  @ViewChild('imgP') imagenPerfil: ElementRef;
  @ViewChild('controlC') carousel: ElementRef;



  public identidad: Usuario;
  public usuarioModel: Usuario;
  public Upfile: File;
  public url: String;

  constructor(private usuarioService: UsuarioService, private _router: Router) {

    this.identidad = new Usuario('', '', '', 0, '', '', '', '', '');
    this.usuarioModel = new Usuario('', '', '', 0, '', '', '', '', '');
    this.url = usuarioService.url;
  }

  ngOnInit(): void {

    if (localStorage.getItem('sesion')) {
      this.identidad = JSON.parse(localStorage.getItem('sesion'));
      this.usuarioModel = this.identidad;
      let fecha = new Date(this.identidad.birthdate.toString()).toISOString().split('T')[0];
      console.log(fecha + "" + this.identidad.birthdate);
      //para revision

      this.usuarioModel.birthdate = fecha;
    } else {
      this._router.navigate(['/home']);
    }
    //console.log(this.usuarioModel.birthdate);


  }

  ngAfterViewInit() {
    this.form.nativeElement.style = 'display:none';
    this.imagenPerfil.nativeElement.src = this.url + 'getUserImage/' + this.identidad.image;
  }

  ngDoCheck() {
    console.log(this.usuarioModel.birthdate);
    console.log(this.Upfile);
  }

  subirImagen(FileIn: any) {
    this.Upfile = <File>FileIn.target.files[0];

  }

  actualizarUsuario() {
    this.usuarioService.editarUsuario(this.usuarioModel._id, this.usuarioModel).subscribe(
      (response: any) => {
        if (response.user) {
          alert("Tus datos fueron actualizados!");
          localStorage.setItem('sesion', JSON.stringify(response.user));

          if (this.Upfile) {
            alert(`Tu archivo es: ${this.Upfile.name}`)

            this.usuarioService.cargarImagenUsuario(this.Upfile, this.usuarioModel._id).subscribe(
              (result: any) => {
                this.usuarioModel.image = result.image;
                localStorage.setItem('sesion', JSON.stringify(this.usuarioModel));
                let rutaImagen = this.url + 'getUserImage/' + this.usuarioModel.image;
                //mostrar la imagen ?
                this.imagenPerfil.nativeElement.src = rutaImagen;
              }
            );
          }


        } else {
          alert("error al actualizar datos")
        }
        this.hideForm();
      }, error => {
        if (error != null) {
          console.log(error);
        }
      }
    );

  }

  cerrarSesion() {
    localStorage.removeItem('sesion');
    //localStorage.removeItem('Tema');
    this.identidad = null;
    this._router.navigate(['/']);

    // this._routes.navigate(['/']);
  }

  cerrarCuenta(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: "Despues tendras que crear una nueva cuenta!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Borrarla!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.usuarioService.eliminarUsuario(id).subscribe(
          (response: any) => {
            if (response.user) {
              swalWithBootstrapButtons.fire(
                'Borrada!',
                'Tu cuenta ha sido Eliminada.',
                'success'
              )
              localStorage.removeItem('sesion');
              // this.identidad = null;
              this.identidad = new Usuario('', '', '', 0, '', '', '', '', '');
              this.usuarioModel = new Usuario('', '', '', 0, '', '', '', '', '');
              this._router.navigate(['/']);
            } else {
              alert(response.message);
            }

          }, error => {
            if (error != null) {
              console.log(error);
            }
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu cuenta no ha sido eliminada :)',
          'error'
        )
      }
    })
  }

  showForm() {
    this.display.nativeElement.style = 'display:none';
    this.form.nativeElement.style = 'display:flex';
  }
  hideForm() {
    this.display.nativeElement.style = 'display:flex';
    this.form.nativeElement.style = 'display:none';
  }
}
