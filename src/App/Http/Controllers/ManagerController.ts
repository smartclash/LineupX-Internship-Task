import {Request, Response} from 'express';
import Job from '../../../Database/Models/Job';
import Recruiter from '../../../Database/Models/Recruiter';
import mongoose from '../../../Database/Mongoose';

export const showDashboard = async (req: Request, res: Response, args: any) => {
    const jobs = await Job.find({ status: false });
    return res.render('manager/dashboard', {...req.session.user, jobs});
};

export const showCandidates = (req: Request, res: Response, args: any) => {
    return res.render('manager/candidates', req.session.user);
};

export const showAssignedJobs = async (req: Request, res: Response, args: any) => {
    const jobs = await Job.find({ status: true }).populate('assigned_to');

    return res.render('manager/assigned', {...req.session.user, jobs});
};

export const showAssignRecruiter = async (req: Request, res: Response, args: any) => {
    const jobID = decodeURIComponent(req.params.job);
    const job = await Job.findById(new mongoose.Types.ObjectId(jobID));
    const recruiters = await Recruiter.find({});

    if (!job) {
        return res.redirect('/manager/dashboard');
    }

    return res.render('manager/assign', {job, recruiters});
};

export const processAssignRecruiter = async (req: Request, res: Response, args: any) => {
    if (req.body.recruiter === 'false') {
        return res.redirect('/manager/assign/' + req.params.job);
    }

    const jobID = decodeURIComponent(req.params.job);
    const job = await Job.findById(new mongoose.Types.ObjectId(jobID));
    const recruiter = await Recruiter.findById(new mongoose.Types.ObjectId(
        req.body.recruiter
    ));

    await Job.findByIdAndUpdate(new mongoose.Types.ObjectId(jobID), {
        status: true,
        assigned_to: new mongoose.Types.ObjectId(recruiter._id)
    });
    await Recruiter.findByIdAndUpdate(new mongoose.Types.ObjectId(recruiter._id), {
        job: new mongoose.Types.ObjectId(jobID)
    });

    return res.redirect('/manager/assigned');
};
