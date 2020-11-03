import { NgModule } from '@angular/core';
import { MatStepperModule} from '@angular/material/stepper';
import{MatButtonModule} from '@angular/material/button'

const materialcomponents = [
  MatStepperModule,
  MatButtonModule
]

@NgModule({
  imports: [ materialcomponents],
  exports:[materialcomponents]

})
export class MaterialModule { }
