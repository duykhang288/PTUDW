const expess = require("express");
const contacts= require("../controllers/contact.controller");

const router = expess.Router();

router.route("/")
    .get(contacts.findALL)
    .post(contacts.create)
    .delete(contacts.deleteALL);

router.route("/favorite")
    .get(contacts.findALLFarvorite);
router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;