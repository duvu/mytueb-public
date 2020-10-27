import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { VideojsComponent } from './videojs/videojs.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SpinnerComponent } from './component/spinner/spinner.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AddVideoComponent } from './component/add-video/add-video.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';



@NgModule({
  declarations: [VideojsComponent, SpinnerComponent, AddVideoComponent, AddCategoryComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    VideojsComponent,
    SpinnerComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class SharedModule { }
