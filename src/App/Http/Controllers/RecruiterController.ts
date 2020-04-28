import {Request, Response} from 'express';
import Job from '../../../Database/Models/Job';
import mongoose from '../../../Database/Mongoose';
import Candidate from '../../../Database/Models/Candidate';

export const showDashboard = async (req: Request, res: Response, args: any) => {
    const jobs = await Job.find({ 
        accepted: 'unknown',
        assigned_to: new mongoose.Types.ObjectId(req.session.user.id)
    });

    return res.render('recruiter/dashboard', {...req.session.user, jobs});
};

export const showRejected = async (req: Request, res: Response, args: any) => {
    const jobs = await Job.find({ 
        accepted: 'rejected',
        assigned_to: new mongoose.Types.ObjectId(req.session.user.id)
    }).populate('assigned_to');

    return res.render('recruiter/rejected', {...req.session.user, jobs});
};

export const showCompleted = async (req: Request, res: Response, args: any) => {
    const jobs = await Job.find({ 
        completed: true,
        assigned_to: new mongoose.Types.ObjectId(req.session.user.id)
    }).populate('candidate');

    return res.render('recruiter/completed', {...req.session.user, jobs});
};

export const processReject = async (req: Request, res: Response, args: any) => {
    const jobID = decodeURIComponent(req.params.job);
    await Job.findByIdAndUpdate(new mongoose.Types.ObjectId(jobID), {
        accepted: 'rejected'
    });

    return res.redirect('/recruiter/rejected');
};


export const showAccepted = async (req: Request, res: Response, args: any) => {
    const jobs = await Job.find({ 
        accepted: 'accepted',
        assigned_to: new mongoose.Types.ObjectId(req.session.user.id)
    });

    return res.render('recruiter/accepted', {...req.session.user, jobs});
};

export const processAccept = async (req: Request, res: Response, args: any) => {
    const jobID = decodeURIComponent(req.params.job);
    await Job.findByIdAndUpdate(new mongoose.Types.ObjectId(jobID), {
        accepted: 'accepted'
    });

    return res.redirect('/recruiter/accepted');
};

export const showAssign = async (req: Request, res: Response, args: any) => {
    const jobID = decodeURIComponent(req.params.job);
    const job = await Job.findById(new mongoose.Types.ObjectId(jobID));
    const candidates = await Candidate.find({ employed: false });

    return res.render('recruiter/assign', {...req.session.user, job, candidates});
};

export const processAssign = async (req: Request, res: Response, args: any) => {
    const jobID = decodeURIComponent(req.params.job);
    const candidateID = req.body.candidate;

    if (candidateID === 'false') {
        return res.redirect('/recruiter/dashboard');
    }

    await Job.findByIdAndUpdate(new mongoose.Types.ObjectId(jobID), {
        completed: true,
        candidate: new mongoose.Types.ObjectId(candidateID)
    });
    await Candidate.findByIdAndUpdate(new mongoose.Types.ObjectId(candidateID), {
        employed: true,
        assigned_job: new mongoose.Types.ObjectId(jobID)
    });

    return res.redirect('/recruiter/completed');
};
