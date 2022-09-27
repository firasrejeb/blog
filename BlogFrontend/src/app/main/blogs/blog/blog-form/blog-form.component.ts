import {Component, Inject} from '@angular/core';
import {CalendarEvent} from 'angular-calendar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
    selector: 'app-blog-form',
    templateUrl: './blog-form.component.html',
    styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {

    action: string;
    event: CalendarEvent;
    blogForm: FormGroup;
    dialogTitle: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<CalendarEventFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<BlogFormComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    ) {
        this.event = _data.event;
        this.action = _data.action;

        if (this.action === 'edit') {
            this.dialogTitle = this.event.title;
        } else {
            this.dialogTitle = 'New BLOG';

        }

        this.blogForm = this.createEventForm();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create the event form
     *
     * @returns {FormGroup}
     */
    createEventForm(): FormGroup {
        return this._formBuilder.group({
            title: ['', Validators.required],
            author: ['', Validators.required],
            content: ['', Validators.required],
        });
    }
}
