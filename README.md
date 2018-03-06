# bootstrap-confirmation v1.0.7

This is a fork of ethaizone's [original code](https://github.com/ethaizone/Bootstrap-Confirmation)

with some help from [jibe914](https://github.com/jibe914/Bootstrap-Confirmation)
and [MisatoTremor](https://github.com/MisatoTremor/bootstrap-confirmation)

Confirmation plugin compatible with Twitter Bootstrap 3 extending Popover

## Usage

Create your `button or link` with the `data-toggle="confirmation"`.

    <a href="http://google.com" class="btn" data-toggle="confirmation">Confirmation</a>

Enable plugin via JavaScript:

    $('[data-toggle="confirmation"]').confirmation();

Add options when initialized:

    <a href="http://google.com" class="btn" data-toggle="confirmation">Confirmation</a>
    $('[data-toggle="confirmation"]').confirmation({
        placement: 'left'
    });

Enable plugin on class instead of data attribute

    <a href="http://google.com" class="btn bs-confirmation">Confirmation</a>
    $('.bs-confirmation').confirmation();

## Options

In addition to the standard bootstrap popover options, you now have access to the following options

| Name           | Type               | Default                      | Description                                                                                                      |
|----------------|--------------------|------------------------------|------------------------------------------------------------------------------------------------------------------|
| title          | string \| function | 'Are you sure?'              | Default title value if none of these attribute isn't present (`data-confirmation-title`, `data-title`, `title`). |
| btnOkClass     | string \| function | 'btn btn-sm btn-danger'      | Class of confirm button. Default value if `data-btn-ok-class` attribute isn't present.                             |
| btnOkLabel     | string \| function | 'Delete'                     | Label of confirm button. Default value if `data-btn-ok-label` attribute isn't present.                             |
| btnOkIcon      | string \| function | 'glyphicon glyphicon-ok'     | Icon of confirm button. Default value if `data-btn-ok-icon` attribute isn't present.                               |
| btnCancelClass | string \| function | 'btn btn-sm btn-default'     | Class of cancel button. Default value if `data-btn-ok-class` attribute isn't present.                              |
| btnCancelLabel | string \| function | 'Cancel'                     | Label of cancel button. Default value if `data-btn-ok-label` attribute isn't present.                              |
| btnCancelIcon  | string \| function | 'glyphicon glyphicon-remove' | Icon of cancel button. Default value if `data-btn-ok-icon` attribute isn't present.                                |
| singleton      | boolean            | true                         | Set true to allow only one confirmation to show at a time.                                                       |
| popout         | boolean            | true                         | Set true to hide the confirmation when user clicks outside of it.                                                |
| onShow         | function           | function(event, element) {}  | Callback when popup show.                                                                                        |
| onHide         | function           | function(event, element) {}  | Callback when popup hide.                                                                                        |
| onConfirm      | function           | function(event, element) {}  | Callback when confirm button is pressed.                                                                         |
| onCancel       | function           | function(event, element) {}  | Callback when cancel button is pressed.                                                                          |

## Events

| Event Type               | Description                                                                                                               |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------|
| show.bs.confirmation     | This event fires immediately when the `show` instance method is called.                                                   |
| shown.bs.confirmation    | This event is fired when the confirmation has been made visible to the user (will wait for CSS transitions to complete).  |
| hide.bs.confirmation     | This event is fired immediately when the `hide` instance method has been called.                                          |
| hidden.bs.confirmation   | This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete). |
| inserted.bs.confirmation | This event is fired after the `show.bs.confirmation` event when the popover template has been added to the DOM.           |
| confirm.bs.confirmation  | This event is fired when the user click confirmation button.                                                              |
| cancel.bs.confirmation   | This event is fired when the user click cancel button.                                                                    |

    $('[data-toggle="confirmation"]').on('confirm.bs.confirmation', function () {
        // do something…
    })

## Copyright and license

Copyright (C) 2013 bootstrap-confirmation

Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
