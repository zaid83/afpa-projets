var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
const bcrypt = require('bcrypt');
var flash = require('express-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var inscriptionRouter = require('./routes/inscription');
var connexionRouter = require('./routes/connexion');
var logoutRouter = require('./routes/logout');
var requestRouter = require('./routes/requestpass');
var resetRouter = require('./routes/resetpass');




var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'afpa',
    cookie: { maxAge: 60000 },
    saveUninitialized: false,
    resave: false
}));

app.use(flash());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inscription', inscriptionRouter);
app.use('/connexion', connexionRouter);
app.use('/logout', logoutRouter);
app.use('/requestpass', requestRouter);
app.use('/resetpass', resetRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
