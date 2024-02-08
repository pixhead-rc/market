import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanitizedHtmlPipe } from './sanitizer.pipe';
import { StringAbbreviationPipe } from './stringAbbreviation.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SanitizedHtmlPipe,
    StringAbbreviationPipe
  ],
  exports: [
    SanitizedHtmlPipe,
    StringAbbreviationPipe
  ]
})
export class CoreModule { }
