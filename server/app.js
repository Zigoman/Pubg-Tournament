const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const globalErrorHandler = require('./controllers/errorController');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');
const routes = require('./routes/index.route');

const AppError = require('./utils/appError');

const app = express();

app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use('/api/v1/', routes);

app.all('*', (req, res, next) => {
  // add global error handling
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
