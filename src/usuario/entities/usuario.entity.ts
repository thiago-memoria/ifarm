import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class UsuarioEntity {

    @PrimaryGeneratedColumn({
        unsigned: true
    })
    id: number;

    @Column({
        length: 63
    })
    name: string;

    @Column({
        length: 127,
        unique: true
    })
    email: string;

    @Column({
        length: 127
    })
    password: string;

    @Column({
        type: 'date',
        nullable: true
    })
    birthAt: string;

    @CreateDateColumn()
    createAt: string;

    @UpdateDateColumn()
    updateAt: string;

    @Column({
        enum: [1, 2]
    })
    role: number;
}
 