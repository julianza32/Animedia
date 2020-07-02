import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  // @ViewChild('video') video: ElementRef;
  // @ViewChild('btnprev') btnprev: ElementRef;
  // @ViewChild('btnplay') btnplay: ElementRef;
  // @ViewChild('btnpause') btnpause: ElementRef;
  // @ViewChild('btnadel') btnadel: ElementRef;
  // @ViewChild('btnsubir') btnsubir: ElementRef;
  // @ViewChild('btnbajar') btnbajar: ElementRef;
  // @ViewChild('btnmute') btnmute: ElementRef;
  // @ViewChild('btnunmute') btnunmute: ElementRef;
  // @ViewChild('full') btnfull: ElementRef;
  // @ViewChild('exit') btnexit: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  // retro() {
  //   let tiempoActu: number = this.video.nativeElement.currentTime;
  //   let tiempoAtra: number = 5;
  //   let tiempoNuevo: number = tiempoActu - tiempoAtra;
  //   console.log(tiempoActu);
  //   console.log(tiempoNuevo);
  //   this.video.nativeElement.currentTime = tiempoNuevo;
  // }

  // pause() {
  //   if (this.video.nativeElement.paused) {
  //     // alert("verdadero")
  //     this.video.nativeElement.play();
  //     this.btnpause.nativeElement.style.display = 'block';
  //     this.btnplay.nativeElement.style.display = 'none';
  //   } else {
      // alert("false")
  //     this.video.nativeElement.pause();
  //     this.btnpause.nativeElement.display = "none";
  //     this.btnplay.nativeElement.style.display = 'block';
  //   }
  // }
  // adelantar() {
  //   let tiempoActu: number = this.video.nativeElement.currentTime;
  //   let tiempoAdela: number = 5;
  //   let tiempoNuevo: number = tiempoActu + tiempoAdela;
  //   console.log(tiempoActu);
  //   console.log(tiempoNuevo);
  //   this.video.nativeElement.currentTime = tiempoNuevo;
  // }
  // subir() {
  //   let volActual:number=this.video.nativeElement.volume;
  //   let volNuevo:number = volActual + 0.2;
  //   console.log(volNuevo);
  //   if(volNuevo < 1.0){
  //     this.video.nativeElement.volume=volNuevo;
  //   }
  // }
  // bajar() {
  //   let volActual:number=this.video.nativeElement.volume;
  //   let volNuevo:number = volActual - 0.2;
  //   console.log(volNuevo);
  //   if(volNuevo > 0.0){
  //     this.video.nativeElement.volume=volNuevo;
  //   }
  // }
  // mutear() {
  //   console.log(this.video.nativeElement.volume);

  //   if (this.video.nativeElement.volume == 0) {
  //     console.log(this.video.nativeElement.volume + "muteado");

  //     this.video.nativeElement.volume = 1;
  //     this.btnmute.nativeElement.style.display = "block";
  //     this.btnunmute.nativeElement.style.display = "none";
  //   } else {
  //     console.log(this.video.nativeElement.volume + "unmuteado");
  //     this.video.nativeElement.volume = 0;
  //     this.btnmute.nativeElement.style.display = "none";
  //     this.btnunmute.nativeElement.style.display = "block";

  //   }
  // }

// window.onresize = function () {     if (window.outerWidth === screen.width && window.outerHeight === screen.height) {         if (!fullscreen) {             fullscreen = true;             onfullscreenchange(true);         }     } else {         if (fullscreen) {             fullscreen = false;             onfullscreenchange(false);     } };
  // fullpantalla() {
  //   console.log(this.video.nativeElement);
  //   this.video.nativeElement.style.width = '100vw';
  // }
  // exitFull() {

  // }
}
