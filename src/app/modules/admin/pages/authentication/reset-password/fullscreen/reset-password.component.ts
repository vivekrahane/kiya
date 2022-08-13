import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { kiyaAnimations } from '@kiya/animations';
import { KiyaAlertType } from '@kiya/components/alert';
import { KiyaValidators } from '@kiya/validators';

@Component({
    selector     : 'reset-password-fullscreen',
    templateUrl  : './reset-password.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : kiyaAnimations
})
export class ResetPasswordFullscreenComponent implements OnInit
{
    alert: { type: KiyaAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    resetPasswordForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: FormBuilder
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.resetPasswordForm = this._formBuilder.group({
                password       : ['', Validators.required],
                passwordConfirm: ['', Validators.required]
            },
            {
                validators: KiyaValidators.mustMatch('password', 'passwordConfirm')
            }
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reset password
     */
    resetPassword(): void
    {
    }
}
