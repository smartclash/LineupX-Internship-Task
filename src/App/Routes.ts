import {Router} from 'express';
import UserOnly from './Http/Middleware/UserLoggedIn';
import ManagerOnly from './Http/Middleware/UserIsManager';
import * as Auth from './Http/Controllers/AuthController';
import * as Index from './Http/Controllers/IndexController';
import RecruiterOnly from './Http/Middleware/UserIsRecruiter';
import * as Manager from './Http/Controllers/ManagerController';
import * as Recruiter from './Http/Controllers/RecruiterController';

const route: Router = Router();

// Index Handlers

route.get('/', Index.indexHandler);

// Auth Routes

route.get('/auth/login/decide', Auth.showTypeSelection);
route.get('/auth/login/manager', Auth.showManagerLogin)
    .post('/auth/login/manager', Auth.processManagerLogin);
route.get('/auth/login/recruiter', Auth.showRecruiterLogin)
    .post('/auth/login/recruiter', Auth.processRecruiterLogin);

// Manager Routes

route.get('/manager/dashboard', ManagerOnly, Manager.showDashboard);

// Recruiter Routes

route.get('/recruiter/dashboard', RecruiterOnly, Recruiter.showDashboard);

export default route;
