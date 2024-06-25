import { Router } from 'express';


import isAuth from 'App/Middleware/Auth';
import EventsController from 'App/Controllers/Http/EventsController';
import GuestsController from 'App/Controllers/Http/GuestsController';

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

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route.get('/health', ApisController.health);
Route.get('/config', ApisController.config);

Route.get('/user/:username/info', UsersController.view_info_of_user_by_public);

export { Route as routes };