import { AppDataSource } from "../data-source";
import { RifaEntity } from "../entities/RifaEntity";

export const rifaRepository = AppDataSource.getRepository(RifaEntity).extend({
    bought(order: number) {
        this.createQueryBuilder()
            .update()
            .set({
                status: 'Pago'
            })
            .where("order=:order", { order })
            .execute()
    }
})