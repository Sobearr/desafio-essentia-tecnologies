import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text", { nullable: false })
  title!: string;

  @Column("boolean", { default: false })
  complete!: boolean;
}
