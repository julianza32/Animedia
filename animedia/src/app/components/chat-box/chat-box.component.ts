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

  constructor(private renderer: Renderer2) { }
  
  ngOnInit(): void {
  }

  maximizar() {
    this.renderer.setStyle(this.chat.nativeElement, "height","300px");
    this.renderer.setStyle(this.maxi.nativeElement,'display','none');
    this.renderer.setStyle(this.mini.nativeElement,'display', 'flex');
    // alert("miximizo")
  }
  minimizar() {
    this.renderer.setStyle(this.chat.nativeElement, "height","30px");
    this.renderer.setStyle(this.mini.nativeElement,'display','none');
    this.renderer.setStyle(this.maxi.nativeElement,'display', 'flex');
  }
    cerrar(){
      alert("Cerro")
  }

}
