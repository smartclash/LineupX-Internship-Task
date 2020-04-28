import {Request, Response, NextFunction} from 'express';

const UserLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (! req.session.user) {
        return res.redirect('/auth/login/decide');
    }

    next();
};

export default UserLoggedIn;
