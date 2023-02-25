import { Request, Response, NextFunction } from 'express';

import petModel from './pet.model';


export const getPet = async (req: Request, res: Response) => {
    
    const pet = await petModel.find({})

    return res.status(200).json({ pet })

}