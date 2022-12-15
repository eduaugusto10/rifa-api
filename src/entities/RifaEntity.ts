import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tbrifa')
export class RifaEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: '100' })
    status: string

    @Column("varchar", { length: '100' })
    name: string

    @Column("varchar", { length: '100' })
    email: string

    @Column("varchar", { length: '20' })
    phone: string

    @Column("varchar", { length: '20' })
    cpf: string

    @Column("varchar", { length: '20' })
    pago: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date


}