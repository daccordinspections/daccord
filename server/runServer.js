// run the node js server

// 
module.exports = (app) => {

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
        console.log(`Bonjour! the D'accord server is running on http://localhost:${PORT}`);
    });

}
