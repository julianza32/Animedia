import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  public video = localStorage.getItem('pelicula');
  public sesion = JSON.parse(localStorage.getItem('sesion')); 
  constructor(private _router:Router) { }
  @ViewChild('video')reproductor:ElementRef;

  ngOnInit(): void {
    // console.log(this.video);
  }
  ngAfterViewInit(){
    if(this.sesion.affiliateCard != "platino"){
      this._router.navigate(['/home']);
    }
    this.reproductor.nativeElement.src=this.video;
  }

}
