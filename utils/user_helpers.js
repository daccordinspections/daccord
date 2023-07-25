/////////////////////////////////
const bcrypt = require("bcrypt");
const User   = require("../models/user");


///////////////////////////////////////
function registerUser(userCredentials){

    // create superAdminUser1
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        let credentials;
        if (userCredentials.name == "Developer") {
            credentials = {
                name : userCredentials.name,
                username : userCredentials.username,
                password : userCredentials.password,
                image : userCredentials.image,
                cloudinary_id : userCredentials.cloudinary_id,
                isSupperAdmin : false,
                isDeveloper : true
            };
        } else {
            credentials = {
                name : userCredentials.name,
                username : userCredentials.username,
                password : userCredentials.password,
                image : userCredentials.image,
                cloudinary_id : userCredentials.cloudinary_id,
                isSupperAdmin : true,
                isDeveloper : false
            };
        }

        bcrypt.hash(credentials.password, salt, function (err, hash) {
            if (err) return next(err);
            
            const newAdmin = new User({
                name : credentials.name,
                username: credentials.username,
                image: credentials.image,
                cloudinary_id: credentials.cloudinary_id,
                isSupperAdmin: credentials.isSupperAdmin,
                isDeveloper: credentials.isDeveloper,
                password: hash
            });

            newAdmin.save();

            if (newAdmin.name == "Developer") {
                console.log(`Created Developer account at ${newAdmin.createdAt}`);
            } else {
                console.log(`Created new admin : ${newAdmin.username} at ${newAdmin.createdAt}`);
            }

            console.log(newAdmin);

        });
    });

};


// exports
module.exports = { registerUser };