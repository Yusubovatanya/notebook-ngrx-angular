import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatDividerModule, MatButtonModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
