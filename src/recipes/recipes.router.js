// const router = require("express").Router({mergeParams: true})
// const controller = require("./races.controller")
// const methodNotAllowed = require("../errors/methodNotAllowed")

// router.route("/:racesId").get(controller.read).all(methodNotAllowed)
// router.route("/").get( controller.list).all(methodNotAllowed)

// module.exports = router;

const router = require("express").Router()
const controller = require("./recipes.controller")


router.route("/").get(controller.list)

module.exports = router;