import {Request, Response, NextFunction} from 'express';

const UserIsGuest = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user) {
        if (req.session.user.type === 'manager') {
            return res.redirect('/manager/dashboard');
        }
    
        return res.redirect('/recruiter/dashboard');
    }

    next();
};

export default UserIsGuest;
