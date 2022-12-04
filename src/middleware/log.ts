import { NextFunction, Request, Response } from "express"

// NextFunction decide si seguir a la siguiente función o no
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Hola soy el LOG")
    next()
    
};

export { logMiddleware }