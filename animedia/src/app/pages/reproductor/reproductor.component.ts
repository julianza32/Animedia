import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  public video = localStorage.getItem('pelicula');
  constructor() { }
  @ViewChild('video')reproductor:ElementRef;

  ngOnInit(): void {
    console.log(this.video);
  }
  ngAfterViewInit(){

  }

}
