const express = require("express");
const session = require("express-session");
const passport = require("passport");

const app = express();

    app.get("/callback", passport.authenticate("discord", { failureRedirect: "/" }), async (req, res) => {
        let banned = false //client.settings.get("bannedusers")
        if(banned) {
            req.session.destroy()
            res.json({login: false, message: "You are banned from the dashboard", logout: true})
            req.logout();
        } else {
            res.redirect("/dashboard")
        }
    });