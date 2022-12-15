import { RifaController } from "../controllers/RifaController";
import { Router } from "express";

const routes = Router()

routes.post('/rifa', new RifaController().store)
routes.get('/rifa', new RifaController().getAll)
routes.get('/rifa/:id', new RifaController().getAll)
routes.put('/rifa/:id', new RifaController().update)
routes.delete('/rifa/:id', new RifaController().delete)
routes.post('/generated-number', new RifaController().generated)
export default routes