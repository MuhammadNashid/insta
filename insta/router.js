import { Router } from "express";

import * as rh from './requestHandler.js'
import Auth from "./middleware/Auth.js";

const router=Router();

router.route('/add').post(rh.add)
router.route('/getUser').get(Auth,rh.getUser)
router.route('/getUserDetails/:id').get(rh.getUserDetails)
router.route('/update/:id').put(rh.update)
router.route('/deleteUser/:id').delete(rh.deleteUser)
router.route('/adduser').post(rh.adduser)
router.route('/login').post(rh.login)
// router.route('/home').get(Auth,rh.home)


export default router;