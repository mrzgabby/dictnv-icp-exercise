import { Router } from 'express';

import ApisController from 'App/Controllers/Http/ApisController';
import UsersController from 'App/Controllers/Http/UsersController';

import isAuth from 'App/Middleware/Auth';
import FreedomWallsController from 'App/Controllers/Http/FreedomWallsController';
import PhoneBookController from 'App/Controllers/Http/PhoneBookController';

const Route = Router();

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

// USER
Route.get('/user/me', isAuth, UsersController.me);
Route.post('/user/register', isAuth, UsersController.register);
Route.post('/user/update', isAuth, UsersController.update);



// Freedom Wall
Route.post('/freedomwall/create', isAuth, FreedomWallsController.create);


// Phone Book (FINAL OUTPUT)
Route.post('/phonebook/addtocontacts', isAuth, PhoneBookController.addtocontacts);


/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route.get('/health', ApisController.health);

Route.get('/user/:username/info', UsersController.view_info_of_user_by_public);

export { Route as routes };