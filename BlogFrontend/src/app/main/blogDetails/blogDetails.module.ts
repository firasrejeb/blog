import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseSharedModule } from '@fuse/shared.module';
import {BlogDetailsService} from './blogDetails.service';
import {BlogDetailsComponent} from './blogDetails.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {BlogAboutComponent} from './tabs/about/blog-about.component';



const routes = [
    {
        path     : 'blogDetails/:id',
        component: BlogDetailsComponent,
    },


];

@NgModule({
    declarations: [
        BlogDetailsComponent,
        BlogAboutComponent,

    ],
    imports: [
        RouterModule.forChild(routes),
        MatDialogModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTabsModule,

        FuseSharedModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatSelectModule,
        MatDatepickerModule,
        MatInputModule
    ],
    exports: [
        BlogAboutComponent,
        BlogDetailsComponent
    ],
    providers: [
        BlogDetailsService
    ]
})
export class BlogDetailsModule
{
}
