import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn({ length: 15 })
  id: string;

  @Column({ length: 50 })
  password: string;

  @Column({ length: 5 })
  name: string;
}
