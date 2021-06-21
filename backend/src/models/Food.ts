import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("foods")
class Food {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column()
  tipo: string;

  @Column({ default: 1 })
  quantidade: number;

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export { Food }
