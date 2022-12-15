import { AppDataSource } from "../data-source";
import { RifaEntity } from "../entities/RifaEntity";

export const rifaRepository = AppDataSource.getRepository(RifaEntity)