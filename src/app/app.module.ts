import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameComponent } from 'src/components/game/game.component';
import { HeaderContentComponent } from 'src/components/main-menu/child-contents/header-content/header-content.component';
import { MenuContentComponent } from 'src/components/main-menu/child-contents/menu-content/menu-content.component';
import { MainMenuComponent } from 'src/components/main-menu/main-menu.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MainMenuComponent,
    MenuContentComponent,
    HeaderContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }