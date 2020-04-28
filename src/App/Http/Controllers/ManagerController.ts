import {Request, Response} from 'express';

export const showDashboard = (req: Request, res: Response, args: any) => {
    return res.render('manager/dashboard', req.session.user);
};
