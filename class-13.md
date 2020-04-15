Potential down sides...

Cookies are included with every HTTP request, thereby slowing down your web application by needlessly transmitting the same data over and over
Cookies are included with every HTTP request, thereby sending data unencrypted over the internet (unless your entire web application is served over SSL)
Cookies are limited to about 4 KB of data — enough to slow down your application (see above), but not enough to be terribly useful

HTML5 allows for ...

a lot of storage space
on the client
that persists beyond a page refresh
and isn’t transmitted to the server

From your JavaScript code, you’ll access HTML5 Storage through the localStorage object on the global window object. Before you can use it, you should detect whether the browser supports it.

`function supports_html5_storage() {`
 ` try {`
   ` return 'localStorage' in window && window['localStorage'] !== null;`
  `} catch (e) {`
    `return false;`
  `}`
`}`

Instead of writing this function yourself, you can use Modernizr to detect support for HTML5 Storage.

`if (Modernizr.localstorage) {`
  `// window.localStorage is available!`
`} else {`
 ` // no native support for HTML5 storage :(`
 ` // maybe try dojox.storage or a third-party solution`
`}`

Like other JavaScript objects, you can treat the localStorage object as an associative array. Instead of using the getItem() and setItem() methods, you can simply use square brackets. For example, this snippet of code:

`var foo = localStorage.getItem("bar");`
`// ...`
`localStorage.setItem("bar", foo);`
`…could be rewritten to use square bracket syntax instead:`

`var foo = localStorage["bar"];`
`// ...`
`localStorage["bar"] = foo;`

There are also methods for removing the value for a given named key, and clearing the entire storage area (that is, deleting all the keys and values at once).

`interface Storage {`
  `deleter void removeItem(in DOMString key);`
  `void clear();`
`};`

Calling removeItem() with a non-existent key will do nothing.

Finally, there is a property to get the total number of values in the storage area, and to iterate through all of the keys by index (to get the name of each key).

`interface Storage {`
  `readonly attribute unsigned long length;`
  `getter DOMString key(in unsigned long index);`
`};`

If you call key() with an index that is not between 0–(length-1), the function will return null.

Too much info i want to retain.

find the reference here
http://diveinto.html5doctor.com/storage.html