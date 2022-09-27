import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import { BlogComponent } from './blog/blog.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BlogFormComponent } from './blog/blog-form/blog-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ColorPickerModule } from 'ngx-color-picker';
import { BlogRowsComponent } from './blog/blog-rows/blog-rows.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {BlogDetailsModule} from '../blogDetails/blogDetails.module';

const routes: Routes = [
    {
        path: 'blog',
        component: BlogComponent,
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        NgxDatatableModule,
        CommonModule,

        MatIconModule,
        MatButtonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatTooltipModule,
        MatOptionModule,
        MatSelectModule,
        MatCheckboxModule,
        ColorPickerModule,
        TableModule,
        ButtonModule,
        BlogDetailsModule,
    ],
    exports: [
        BlogFormComponent,
        BlogRowsComponent
    ],
    declarations: [
        BlogFormComponent,
        BlogComponent,
        BlogRowsComponent,
    ],
})
export class BlogModule {}
