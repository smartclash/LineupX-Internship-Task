import {Router} from 'express';
import GuestOnly from './Http/Middleware/UserIsGuest';
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

route.get('/auth/login/decide', GuestOnly, Auth.showTypeSelection);
route.get('/auth/login/manager', GuestOnly, Auth.showManagerLogin)
    .post('/auth/login/manager', GuestOnly, Auth.processManagerLogin);
route.get('/auth/login/recruiter', GuestOnly, Auth.showRecruiterLogin)
    .post('/auth/login/recruiter', GuestOnly, Auth.processRecruiterLogin);
route.get('/auth/logout', Auth.processLogout);

// Manager Routes

route.get('/manager/dashboard', ManagerOnly, Manager.showDashboard);
route.get('/manager/candidates', ManagerOnly, Manager.showCandidates);
route.get('/manager/assigned', ManagerOnly, Manager.showAssignedJobs);
route.get('/manager/assign/:job', ManagerOnly, Manager.showAssignRecruiter)
    .post('/manager/assign/:job', ManagerOnly, Manager.processAssignRecruiter);

// Recruiter Routes

route.get('/recruiter/dashboard', RecruiterOnly, Recruiter.showDashboard);
route.get('/recruiter/rejected', RecruiterOnly, Recruiter.showRejected);
route.get('/recruiter/completed', RecruiterOnly, Recruiter.showCompleted);
route.get('/recruiter/accepted', RecruiterOnly, Recruiter.showAccepted);
route.get('/recruiter/reject/:job', RecruiterOnly, Recruiter.processReject);
route.get('/recruiter/accept/:job', RecruiterOnly, Recruiter.processAccept);
route.get('/recruiter/assign/:job', RecruiterOnly, Recruiter.showAssign)
    .post('/recruiter/assign/:job', RecruiterOnly, Recruiter.processAssign);

export default route;
