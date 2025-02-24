import {Router} from 'express';
import adminController from '../../controllers/admin-controller';
const router = Router();
router.get('/restaurants', adminController.getRestaurants);


export default router;