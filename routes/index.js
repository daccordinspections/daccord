// export index routes
const router = require("express").Router();
const Newsletter = require("../models/newsletter");
const Testimonial = require("../models/testimonial");

function evenArray(array) {
    const ln = array.length;

    if (ln >= 4) {
        return array.slice(0, 4); // return 4 items if the array has at least four items
    }

    if (ln >= 2) {
        return array.slice(0, 2); // return 2 items if the array has at least 2 items
    }

    return (ln === 1 ? array : []) // return the array if it has one item else an empty array

}


module.exports = (app) => {

    router.get("/", async (req, res) => {

        const testimonials = await Testimonial.find().sort({ createdAt : "desc" });
        const newsletters = await Newsletter.find().sort({ createdAt : "desc" });
        
        res.render("home", {
            pageName : "Home",
            newsletters : evenArray(newsletters),
            testimonials : testimonials
        });
    });


    router.get("/newsletters", async (req, res) => {
        const newsletters = await Newsletter.find().sort({ createdAt : "desc" });
        res.render("newsletters", {
            pageName : "Newsletters",
            pageDescription : "Newsletters",
            newsletters : newsletters || [],
        });
    });


    router.get("/newsletters/:slug", async (req, res) => {
        
        const newsletter = await Newsletter.findOne({ slug : req.params.slug });
        const newsletters = await Newsletter.find().sort({ createdAt : "desc" });

        res.render("newsletter", {
            pageName : newsletter.title + " D'accord Inspection Solutions",
            pageDescription : newsletter.title,
            newsletter : newsletter,
            newsletters : newsletters
        });
    });


    router.get("/services", async (req, res) => {
        const newsletters = await Newsletter.find().sort({ createdAt : "desc" });
        res.render("services", {
            pageName : "Services",
            pageDescription : "D'accord Inspection Solutions offers the following services",
            newsletters : newsletters || [],
        });
    });


    router.get("/privacy-policy", async (req, res) => {
        const newsletters = await Newsletter.find().sort({ createdAt: "desc" });
        res.render("privacy-policy", {
            pageName: "Privacy Policy",
            newsletters: newsletters
        })
    })


    router.get("/terms-and-conditions", async (req, res) => {
        const newsletters = await Newsletter.find().sort({ createdAt: "desc" });
        res.render("terms-and-conditions", {
            pageName: "Terms and Conditions",
            newsletters: newsletters
        });
    });


    router.get("/:route", async (req, res) => {
        const newsletters = await Newsletter.find().sort({ createdAt : "desc" });
        res.render("404", {
            pageName : "404 Error - Sorry we coudn't find that page",
            newsletters : newsletters || [],
        });
    });
    
    app.use("", router);

}
