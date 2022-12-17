import { rifaRepository } from "../repositories/RifaRepository";
import { Request, Response } from "express";

export class RifaController {
    async store(req: Request, res: Response) {
        return
    }
    async getByNumber(req: Request, res: Response) {
        return
    }
    async getAll(req: Request, res: Response) {
        const numbers = await rifaRepository.find()
        return res.json(numbers)
    }
    async update(req: Request, res: Response) {
        const { id } = req.params
        const { name, email, cpf, phone, status, order } = req.body

        await rifaRepository.update(parseInt(id), {
            name,
            email,
            cpf,
            phone,
            status,
            order
        })

        return res.send()
    }
    async delete(req: Request, res: Response) {
        return
    }
    async generated(req: Request, res: Response) {
        const { number, rifa } = req.body

        for (let i = 0; i < number; i++) {
            await rifaRepository.save({ status: "Disponível" })
        }
        return res.send()
    }

    async bought(req: Request, res: Response) {
        const { order } = req.params

        const orderNum = Number(order)
        if (orderNum > 0) {
            await rifaRepository.bought(Number(orderNum))
        }
        return res.send()
    }
}