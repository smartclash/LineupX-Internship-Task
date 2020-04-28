import {Request, Response, NextFunction} from 'express';

const UserIsRecruiter = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user) {
        if (req.session.user.type !== 'recruiter') {
            return res.redirect('/auth/login/decide');
        }

        return next();
    }

    return res.redirect('/auth/login/decide');
};

export default UserIsRecruiter;
