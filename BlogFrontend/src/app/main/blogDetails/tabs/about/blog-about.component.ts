import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import {Blog} from '../../../../_Model/Blog';
import {BlogService} from '../../../../_Service/BlogService';

@Component({
    selector     : 'blog-about',
    templateUrl  : './blog-about.component.html',
    styleUrls    : ['./blog-about.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class BlogAboutComponent implements OnInit, OnDestroy
{
    about: any;
    blog1: Blog;
    @Input() blog: Blog;
    @Output() removeBlogdetailsEvent = new EventEmitter();



    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {BlogService} _profileService
     */
    constructor(
        private blogService: BlogService


    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnDestroy(): void {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
    }

}
