import { Router } from "express";

import * as rh from './requestHandler.js'
import Auth from "./middleware/Auth.js";

const router=Router();

router.route('/getUser').get(Auth,rh.getUser)
router.route('/getUserDetails').get(Auth,rh.getUserDetails)
router.route('/update/:id').put(rh.update)
router.route('/deleteUser').delete(rh.deleteUser)
router.route('/adduser').post(rh.adduser)
router.route('/login').post(rh.login)
router.route('/addpost').post(Auth,rh.addpost)
router.route('/showPost/:id').get(rh.showPost)



export default router;