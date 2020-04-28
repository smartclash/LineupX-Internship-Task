import {Request, Response} from 'express';

export const indexHandler = (req: Request, res: Response, args: any) => {
    res.redirect('/auth/login/decide');
};
