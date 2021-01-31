
let express = require('express');

let router = express.Router();

let themeController = require('../controllers/themeController');

router.get('/themes/forums/:idforum', themeController.getThemesByForum);
router.get('/themes/:idtheme',themeController.getThemeById);
router.get('/themes',themeController.getThemes);
router.post('/themes',themeController.addtheme);
router.put('/themes/:idtheme',themeController.modifytheme);
router.delete('/themes/:idtheme',themeController.deleteTheme);

module.exports = router;