occamsrazor-click-browser
=============================
This function adds an event handler for the click event that triggers an occamsrazor event [occamsrazor](https://github.com/sithmel/occamsrazor.js)

```js
var or = require('occamsrazor');
var registerClick = require('occamsrazor-click-browser');

var events = or();
registerClick(events);

events.on('myevent', function (evt, payload) {
  // listen for the event
});
```
Then you mark the element with these attributes:
```html
<button data-event-onclick="myevent" data-event-onclick-payload='{"hello": "world"}'>Trigger myevent</button>
```
You can also trigger multiple space separated events:
```html
<button
  data-event-onclick="myevent1 myevent2"
  data-event-onclick-payload-1='{"hello": "world1"}'
  data-event-onclick-payload-2='{"hello": "world2"}'
>Trigger myevent1 and myevent2</button>
```


Syntax:
**registerClick(events, window);**

* events: an occamsrazor instance
* window (optional): the global object, it defaults to "window"
