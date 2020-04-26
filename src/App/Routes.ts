import {Router} from 'express';
import * as Auth from './Http/Controllers/AuthController';

const route: Router = Router();

// Auth Routes

route.get('/auth/login/decide', Auth.showTypeSelection);
route.get('/auth/login/manager', Auth.showManagerLogin);
route.get('/auth/login/recruiter', Auth.showRecruiterLogin);

route.post('/auth/login/manager', Auth.processManagerLogin);
route.post('/auth/login/recruiter', Auth.processRecruiterLogin);

export default route;
