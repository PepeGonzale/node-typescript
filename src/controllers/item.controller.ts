import { Request, Response } from 'express'
import { interItem } from '../services/item.service'
import handleHttp from '../utils/error.handle'
const getItem = (req: Request, res: Response) => {
    try {

    } catch(e) {
        handleHttp(res, "error get item")
    }
}
const getItems = (req: Request, res: Response) => {
     try {

    } catch(e) {
        handleHttp(res, "error get items")
    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch(e) {
       handleHttp(res, "error update item")
    }
}

const postItem = async ({body}: Request, res: Response) => {
     try {
        const responseItem = await interItem(body)
        res.send(responseItem)
    } catch(e) {
        handleHttp(res, "error post item")
    }
}

const deleteItem = (req: Request, res: Response) => {
     try {

    } catch(e) {
        handleHttp(res, "error delete item")
    }
}
export { getItem, getItems, postItem, updateItem, deleteItem}