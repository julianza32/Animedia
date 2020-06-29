import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, ChatBoxComponent],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent, FooterComponent, ChatBoxComponent]
})
export class ComponentsModule { }
