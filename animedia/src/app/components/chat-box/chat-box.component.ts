import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})

export class ChatBoxComponent implements OnInit {
  @ViewChild('chat') chat: ElementRef;
  @ViewChild('max') maxi: ElementRef;
  @ViewChild('min') mini: ElementRef;

  public preguntas=[
    {"indice":1,"texto":"¿Como puedo ver contenido dentro de la pagina?"},
    {"indice":2,"texto":"¿En donde puedo cambiar mi membresía?"},
    {"indice":3,"texto":"¿En donde puedo reservar mis boletas?"}
  ];
  public respuesta:any;

  constructor(private renderer: Renderer2) {
    this.respuesta = [];
   }
  
  ngOnInit(): void {
  }

  validarPregunta(id)
  {
    console.log(id);
    
    switch(id)
    {
      case 1: this.respuesta.push({"texto":"Debes iniciar sesion y contar con una cuenta platino"});
      break;
      case 2:this.respuesta.push({"texto":"Ve al menu, click en Boletería y comprar tarjeta" });
      break;
      case 3:this.respuesta.push({"texto":"Ve al menu, opción Boletería y podras escoger tambien la ubicación en la sala"});;
      break;
    }
  }

  maximizar() {
    this.renderer.setStyle(this.chat.nativeElement, "height","300px");
    this.renderer.setStyle(this.maxi.nativeElement,'display','none');
    this.renderer.setStyle(this.mini.nativeElement,'display', 'flex');
    // alert("miximizo")
  }
  minimizar() {
    this.renderer.setStyle(this.chat.nativeElement, "height","0px");
    this.renderer.setStyle(this.mini.nativeElement,'display','none');
    this.renderer.setStyle(this.maxi.nativeElement,'display', 'flex');
  }
    cerrar(){
      alert("Cerro")
  }

}
