import {Request, Response} from 'express';

export const showTypeSelection = (req: Request, res: Response, args: any) => {
    return res.json({
        message: "select the page correctly"
    });
};

export const showManagerLogin = (req: Request, res: Response, args: any) => {

};

export const showRecruiterLogin = (req: Request, res: Response, args: any) => {
    
};

export const processManagerLogin = (req: Request, res: Response, args: any) => {
    
};

export const processRecruiterLogin = (req: Request, res: Response, args: any) => {
    
};
