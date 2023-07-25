// run the node js server

// 
module.exports = (app) => {

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
        if (process.env.NODE_ENV !== "production") {
            console.log(`Bonjour! the D'accord server is running on http://localhost:${PORT}`);
        } else {
            console.log(`Bonjour! the D'accord server is running...`);
        }
    });

}
