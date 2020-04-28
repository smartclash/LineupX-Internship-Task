// @ts-nocheck

import Manager from './../../../Database/Models/Manager';
import Recruiter from './../../../Database/Models/Recruiter';
import {Request, Response} from 'express';
import validator from 'validator';
import * as bcrypt from 'bcrypt';

export const showTypeSelection = (req: Request, res: Response, args: any) => {
    return res.render('auth/index');
};

export const showManagerLogin = (req: Request, res: Response, args: any) => {
    return res.render('auth/manager');
};

export const showRecruiterLogin = (req: Request, res: Response, args: any) => {
    return res.render('auth/recruiter');
};

export const processManagerLogin = async (req: Request, res: Response, args: any) => {
    const email = req.body.email;
    const passw = req.body.password;

    if (!validator.isEmail(email) && validator.isEmpty(passw)) {
        return res.render('auth/manager', { error: 'Either the email or password is not correct' });
    }

    const user = await Manager.findOne({ email });
    if (!user) {
        return res.render('auth/manager', { error: 'Account not found with provided credentials' });
    }

    const passwordIsCorrect = await bcrypt.compare(passw, user.password);
    if (!passwordIsCorrect) {
        return res.render('auth/manager', { error: 'The password you entered is wrong' });
    }

    req.session.user = {
        name: user.name,
        email: user.email,
        type: 'manager',
    };

    return res.redirect('/manager/dashboard');
};

export const processRecruiterLogin = async (req: Request, res: Response, args: any) => {
    const email = req.body.email;
    const passw = req.body.password;

    if (!validator.isEmail(email) && validator.isEmpty(passw)) {
        return res.render('auth/recruiter', { error: 'Either the email or password is not correct' });
    }

    const user = await Recruiter.findOne({ email });
    if (!user) {
        return res.render('auth/recruiter', { error: 'Account not found with provided credentials' });
    }

    const passwordIsCorrect = await bcrypt.compare(passw, user.password);
    if (!passwordIsCorrect) {
        return res.render('auth/recruiter', { error: 'The password you entered is wrong' });
    }

    req.session.user = {
        name: user.name,
        email: user.email,
        type: 'recruiter',
    };

    return res.redirect('/recruiter/dashboard');
};
