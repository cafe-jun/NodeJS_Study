const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const { User, Post } = require("../models");
const router = express.Router();

router.get("/profile", (req, res) => {
     res.render("profile", { title: "내정보 - nodebird", user: req.user });
});

router.get("/join", (req, res) => {
     res.render("join", {
          title: "회원가입 - Nodebird",
          user: null,
          joinError: req.flash("joinError"),
     });
});

router.get("/", (req, res) => {
     res.render("main", {
          title: "Nodebird",
          twits: [],
          user: req.user,
          loginError: req.flash("loginError"),
     });
});

router.get("/", (req, res, next) => {
     Post.findAll({
          include: {
               model: User,
               attributes: ["id", "nick"],
          },
          order: [["createdAt", "DESC"]],
     })
          .then((posts) => {
               res.render("main", {
                    title: "NodeBird",
                    twits: posts,
                    user: req.user,
                    loginError: req.flash("loginError"),
               });
          })
          .catch((error) => {
               console.error(error);
               next(error);
          });
});

module.exports = router;
