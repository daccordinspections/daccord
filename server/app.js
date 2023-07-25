// export app configurtion

module.exports = (app, express) => {
    app.set('view engine', 'ejs');
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("public"));
}
