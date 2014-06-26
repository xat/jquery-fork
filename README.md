# jquery-fork

forking jquery selectors done easy

```javascript

$('li', 'ul.menu')
    .fork(
        function() {
            this.filter('.active').show();
        },
        function() {
            this.filter(':not(.active)').hide();
        }
    );
```

## License
Copyright (c) 2014 Simon Kusterer
Licensed under the MIT license.