import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { RightMenuComponent } from './right-menu/right-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  declarations: [
    HeaderComponent,
    LeftMenuComponent,
    RightMenuComponent,
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent,
    RightMenuComponent,
  ],
  providers: [
  ]
})
export class ComponentsModule { }
