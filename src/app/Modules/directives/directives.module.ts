import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectvesComponent } from './attribute-directves/attribute-directves.component';

@NgModule({
  declarations: [StructuralDirectivesComponent, AttributeDirectvesComponent],
  imports: [CommonModule],
  exports: [StructuralDirectivesComponent, AttributeDirectvesComponent],
})
export class DirectivesModule {}
