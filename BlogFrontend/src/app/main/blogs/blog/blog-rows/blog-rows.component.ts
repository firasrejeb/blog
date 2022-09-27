import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { FuseConfirmDialogComponent } from '../../../../../@fuse/components/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {Blog} from '../../../../_Model/Blog';
import {BlogService} from '../../../../_Service/BlogService';


@Component({
    selector: 'app-blog-rows',
    templateUrl: './blog-rows.component.html',
    styleUrls: ['./blog-rows.component.scss'],
})
export class BlogRowsComponent implements OnInit {
    @Input() blogs: Blog[];
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    @Output() removeBlogEvent = new EventEmitter();
    blog: Blog ;
    searchText: any;
    constructor(
        private blogService: BlogService,
        public _matDialog: MatDialog,



    ) {}
    ngOnInit(): void {

    }

    upvote(id): void {
        this.confirmDialogRef = this._matDialog.open(
            FuseConfirmDialogComponent,
            {
                disableClose: false,
            }
        );

        this.confirmDialogRef.componentInstance.confirmMessage =
            'Are you sure you want to vote?';

        this.confirmDialogRef.afterClosed().subscribe((result) => {
            if (result) {
                if (id != null) {
                    this.blogService
                        .upvote(id)
                        .subscribe(() => {
                            this.removeBlogEvent.emit();
                        });
                }
            }
            this.confirmDialogRef = null;
        });
    }
    downvote(id): void {
        this.confirmDialogRef = this._matDialog.open(
            FuseConfirmDialogComponent,
            {
                disableClose: false,
            }
        );

        this.confirmDialogRef.componentInstance.confirmMessage =
            'Are you sure you want to vote?';

        this.confirmDialogRef.afterClosed().subscribe((result) => {
            if (result) {
                if (id != null) {
                    this.blogService
                        .downvote(id)
                        .subscribe(() => {
                            this.removeBlogEvent.emit();
                        });
                }
            }
            this.confirmDialogRef = null;
        });
    }



}
