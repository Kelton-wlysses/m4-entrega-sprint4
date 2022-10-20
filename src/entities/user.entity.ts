import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';


@Entity('users')
class User{
  
  @PrimaryGeneratedColumn('uuid')
  id: string
  // readonly id: string
  //dado apenas de leitura, ou seja não é possivel inserir o dado

  //para colocar uma coluna com valor vazio basta fazer como descrito abaixo
  // @Column({ nullable: true})

  @Column({ length: 60})
  name: string

  @Column({ length: 60, unique: true})
  email: string

  @Column()
  isAdm: boolean

  @Column({ default: true })
  isActive: boolean
  
  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date
  
  @Column({ length: 120 })
  @Exclude()
  password: string

}

export { User }





