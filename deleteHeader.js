```javascript
/***********************************************
> deleteHeader by anhkhoa08
***********************************************/

const version = 'V1.0.2';

function setHeaderValue(headers, name, value) {
    const key = name.toLowerCase();

    if (key in headers) {
        headers[key] = value;
    } else {
        headers[name] = value;
    }
}

const modifiedHeaders = $request.headers;

setHeaderValue(
    modifiedHeaders,
    "X-RevenueCat-ETag",
    ""
);

$done({
    headers: modifiedHeaders
});
```
