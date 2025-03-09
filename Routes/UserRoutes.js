import express from 'express'
import { signUp, login ,forget_password,reset_password} from '../Controllers/User.registration.Controller.js'


const router = express.Router()


router.post('/User_Registration', signUp)
router.post('/User_login', login)
router.post('/forget-password', forget_password);
router.post('/reset-password', reset_password);





export default router;