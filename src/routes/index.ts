import { RifaController } from "../controllers/RifaController";
import { Router } from "express";

const routes = Router()

routes.get('/rifa', new RifaController().getAll)
routes.get('/rifa/:email', new RifaController().getByNumber)
routes.put('/rifa/:id', new RifaController().update)
routes.post('/generated-number', new RifaController().generated)
routes.put('/rifa/bought/:order', new RifaController().bought)

export default routes