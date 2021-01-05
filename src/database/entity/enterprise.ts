import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Enterprise {
  @PrimaryColumn({ length: 12, type: "char", name: "ent_no" })
  entNo: string;

  @Column({ length: 30, nullable: false })
  name: string;

  @Column({ length: 12, type: "char", nullable: false })
  phone: string;

  @Column({ length: 15, name: "establishment_date", nullable: false })
  establishmentDate: string;

  @Column({ type: "float" })
  sales: number;

  @Column({ length: 255, nullable: false })
  introduce: string;

  @Column({ type: "tinyint", nullable: false })
  sector: boolean;
}