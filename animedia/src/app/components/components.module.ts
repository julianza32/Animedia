import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, ChatBoxComponent],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports:[NavbarComponent, FooterComponent, ChatBoxComponent]
})
export class ComponentsModule { }
