import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModules} from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/Blocks/Menu/menu.component';
import { SliderComponent } from './Components/Blocks/Slider/slider.component';
import { CategoriesComponent } from './Components/Blocks/Categories/categories.component';
import { UsersComponent } from './Components/Blocks/Users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    CategoriesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }