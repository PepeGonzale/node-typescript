import { Request, Response } from 'express'
import handleHttp from '../utils/error.handle'
const getItem = (req: Request, res: Response) => {
    try {

    } catch(e) {
        handleHttp(res, "error_get_blog")
    }
}
const getItems = (req: Request, res: Response) => {
     try {

    } catch(e) {
        handleHttp(res, "error_get_blog")
    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch(e) {
       handleHttp(res, "error_update_blog")
    }
}

const postItem = ({body}: Request, res: Response) => {
     try {
        res.send(body)
    } catch(e) {
        handleHttp(res, "error_post_blog")
    }
}

const deleteItem = (req: Request, res: Response) => {
     try {

    } catch(e) {
        handleHttp(res, "error_delete_blog")
    }
}
export { getItem, getItems, postItem, updateItem, deleteItem}