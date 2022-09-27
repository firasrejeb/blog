import {Component, ViewEncapsulation} from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import {Blog} from '../../_Model/Blog';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BlogService} from '../../_Service/BlogService';

@Component({
    selector     : 'app-blogDetails',
    templateUrl  : './blogDetails.component.html',
    styleUrls    : ['./blogDetails.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class BlogDetailsComponent
{
    id: number;
    blog1: Blog;

    /**
     * Constructor
     */
    constructor(private  router: Router,
                private route: ActivatedRoute,
                private blogService: BlogService,
    )
    {


    }

    // tslint:disable-next-line:typedef use-lifecycle-interface
    ngOnInit() {
        this.blogUp();
    }


    // tslint:disable-next-line:typedef
    blogUp() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = params['id'];
                console.log(  params['id']);

                this.blogService.getBlog(this.id)
                    .subscribe(
                        (data: Blog) => {
                            this.blog1 = data;
                            console.log(this.blog1);
                            console.log(this.blog1);
                        },
                        (error) => console.log(error)
                    );
            }
        );

    }
}
