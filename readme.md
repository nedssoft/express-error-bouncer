## A Central error handler for express app

## Usage

- npm install error-handler
- In your express server file, require `bouncer`

```javascript
const { bouncer } = require('error-bouncer');

const express = require('express')

const app = express()

app.use(express.json())
const PORT = process.env.PORT || 300
  //...
  //...
  //...
app.use(bouncer);
app.listen(PORT, () => console.log(`server listening at port ${PORT}`))

```

- Notice that the bouncer is last in the pipeline, that is, it should be the last before app.listen() call.

Now anywhere in the app that you want to catch error, you can use the `ErrorHandler constructor as shown below:

```javascript
const { ErrorHandler } = require('error-bouncer')

const testBouncer = (req, res, next) => {
  try {
    //
    throw new ErrorHandler(404, 'Resource not found')
  } catch(err){
    next(err)
  }
}
```

The above would return:
```json
{
    "status": "error",
    "code": 404,
    "message": "Resource not found"
}

```
