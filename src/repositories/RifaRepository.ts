import { AppDataSource } from "../data-source";
import { RifaEntity } from "../entities/RifaEntity";

export const rifaRepository = AppDataSource.getRepository(RifaEntity).extend({
    bought(order: number) {
        this.createQueryBuilder()
            .update()
            .set({
                status: 'Vendido'
            })
            .where("order=:order", { order })
            .execute()
    },
    getAllNumber() {
        return this.createQueryBuilder()
            .select('id')
            .addSelect('name')
            .addSelect('status')
            .getRawMany()
    },
    getOrderByEmail(email: string) {
        return this.createQueryBuilder()
            .select('id')
            .addSelect('name')
            .addSelect('status')
            .where('email=:email', { email })
            .getRawMany()
    }
})