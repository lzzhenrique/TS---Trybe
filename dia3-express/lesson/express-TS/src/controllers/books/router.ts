import { Router, Request, response } from 'express';
import find from './find'
import remove from './remove'
import update from './update'
import create from './create'


const router = Router({ mergeParams: true });

router.get('/books', find);
router.post('/book', create);
router.put('/book', update);
router.delete('/book', remove);


export default router;
