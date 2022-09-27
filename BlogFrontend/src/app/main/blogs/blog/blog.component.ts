import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlogRowsComponent } from './blog-rows/blog-rows.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { fuseAnimations } from '@fuse/animations';
import {Blog} from '../../../_Model/Blog';
import {BlogService} from '../../../_Service/BlogService';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    animations: fuseAnimations,
})
export class BlogComponent implements OnInit {
    blogs: Blog[];
    blog: Blog = new Blog();

    dialogRef: any;


    constructor(
        private _matDialog: MatDialog,
        private _formBuilder: FormBuilder,
        private blogService: BlogService,



    ) {}
    @ViewChild(BlogRowsComponent, { static: true })
       blogRowsComponent: BlogRowsComponent;


    ngOnInit(): void {
        this.getblogs();


    }

    getblogs(): void {
        this.blogService.getALLBlogs().subscribe((blogs) => {
            // @ts-ignore
            this.blogs = blogs;
            console.log( this.blogs);

        });
    }

    /**
     * Add Blog
     */
    addBlog(): void {
        this.dialogRef = this._matDialog.open(BlogFormComponent, {
            disableClose: true,
            panelClass: 'event-form-dialog',
            data: {
                action: 'new',
            },
        });
        this.dialogRef.afterClosed().subscribe((response: FormGroup) => {

            const newBlog = response.getRawValue();
            this.blogService.addBlog(newBlog)
                        .subscribe(() => {
                            this.getblogs();
                        });
                });
    }
}
