import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'animedia';

  ngOnInit() {

    let interval = window.setInterval(this.videoM, 10000);
    /*  clearInterval(interval); */
    let interval2 = window.setInterval(this.visibleAnimedia, 999);
    let interval3 = window.setInterval(this.apearAnimedia, 9999);
    document.getElementsByTagName('video')[0].play();
  }
  videoM() {


    document.getElementById('intro').style.display = 'none';
    document.getElementsByTagName('video')[0].pause();

  }

  visibleAnimedia() {
    document.getElementById('animedia').setAttribute('class', 'animedia visible');
  }
  apearAnimedia() {

    document.getElementById('animedia').style.transition = 'width 2s, height 2s, margin 2s';
    document.getElementById('animedia').style.width = '100%';
    document.getElementById('animedia').style.margin = '0';
  }

}

