import { NextFunction, Request, Response } from "express"

// NextFunction decide si seguir a la siguiente función o no
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers
    const userAgent = header["user-agent"]
    console.log(userAgent)
    res.send('DESDE_MIDDLEWARE')
};

export { logMiddleware }