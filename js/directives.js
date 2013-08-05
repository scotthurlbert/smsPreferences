'use strict';

smsPreferencesApp.directive( 'sendSmsConfirmation', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'partials/send-sms-confirmation.html'
    };
} );

smsPreferencesApp.directive( 'phoneNumber', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'partials/phone-number.html'
    };
} );

smsPreferencesApp.directive( 'confirmationCodeEntry', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'partials/confirmation-code-entry.html'
    };
} );

smsPreferencesApp.directive( 'box', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'partials/box.html'
    };
} );

smsPreferencesApp.directive( 'checkbox', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'partials/checkbox.html'
    };
} );

smsPreferencesApp.directive( 'timesOfDayInput', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'partials/times-of-day-input.html'
    };
} );
smsPreferencesApp.directive( 'timesOfDayCheckboxes', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'partials/times-of-day-checkboxes.html'
    };
} );
smsPreferencesApp.directive( 'daysOfWeekCheckboxes', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'partials/days-of-week-checkboxes.html'
    };
} );
smsPreferencesApp.directive( 'saveCancelButtons', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'partials/save-cancel-buttons.html'
    };
} );
