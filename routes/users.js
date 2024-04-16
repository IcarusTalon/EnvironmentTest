import { Router } from 'express';
import {
  getUser,
  getUsers,
  createUser
} from '../public/javascripts/database/database.js'

const router = Router();

/* GET users listing. */
router.get('/', async (request, response, next) => {
  const users = await getUsers();
  response.send(users);
});

router.get('/:id', async (request, response, next) => {
  const id = request.params.id;
  const user = await getUser(id);
  response.send(user);
});

router.post('/', async (request, response) => {
  const { first_name, last_name, email } = request.body;
  const user = await createUser(first_name, last_name, email);
  response.status(201).send(user);
})

export default router;
