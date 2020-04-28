import {Request, Response, NextFunction} from 'express';

const UserIsManager = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user) {
        if (req.session.user.type !== 'manager') {
            return res.redirect('/auth/login/decide');
        }

        return next();
    }

    return res.redirect('/auth/login/decide');
};

export default UserIsManager;
