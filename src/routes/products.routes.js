const router = require('expres').Router();

router.post('/createProduct', () => {})

router.put('/updateProduct:id', () => {})

router.get('/getProducts', () => {})
router.get('/getProduct:id', () => {})

router.delete('/deleteProductById', () => {})
router.delete('/deleteAllProducts', () => {})


module.exports = router;