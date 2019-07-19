## A Central error handler for express app
Express error bouncer is a middleware that abstracts the handling of HTTP errors in an express application. It eliminates the need to return error response for every checkpoint in the application by using the express error-handling middleware.

## Usage

- npm install `express-error-bouncer`
- In your express server file, require `bouncer`

```javascript
const { bouncer } = require('express-error-bouncer');

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

```js
const { ErrorHandler } = require('express-error-bouncer')

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

# Contribution
- Got an idea on how to make this package better, feel free to contribute
  
Follow me on twitter [@iam_nedsoft](https://twitter.com/iam_nedsoft) for more updates
