// export index routes
const router = require("express").Router();

module.exports = (app) => {
    router.get("/", async (req, res) => {
        // You can define other data or variables needed for the home route here if necessary
        res.render("home", {
            pageName: "Home",
            newsletters: [], // Since newsletters are removed, pass an empty array
            testimonials: [] // Since testimonials are removed, pass an empty array
        });
    });

    router.get("/services", async (req, res) => {
        res.render("services", {
            pageName: "Services",
            pageDescription: "D'accord Inspection Solutions offers the following services",
            newsletters: [] // Since newsletters are removed, pass an empty array
        });
    });

    router.get("/privacy-policy", async (req, res) => {
        res.render("privacy-policy", {
            pageName: "Privacy Policy",
            newsletters: [] // Since newsletters are removed, pass an empty array
        });
    });

    router.get("/terms-and-conditions", async (req, res) => {
        res.render("terms-and-conditions", {
            pageName: "Terms and Conditions",
            newsletters: [] // Since newsletters are removed, pass an empty array
        });
    });

    router.get("/:route", async (req, res) => {
        res.render("404", {
            pageName: "404 Error - Sorry we couldn't find that page",
            newsletters: [] // Since newsletters are removed, pass an empty array
        });
    });

    app.use("", router);
}
