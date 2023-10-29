import { BaseEntity, Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, BeforeInsert, OneToOne, JoinColumn} from "typeorm";
import bcrypt from 'bcrypt';


@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    username: string;

    @Column({nullable: false , unique: true})
    email: string

    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10)
        }
    }
    @Column({ nullable: false })
    password: string;

    @Column()
    image: string

    @Column()
    bio: string;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => "CURRENT_TIMESTAMP()"
    })
    created_at: Date;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => "CURRENT_TIMESTAMP()"
    })
    dob: Date;
    @Column()
    contacts: string[];

    @Column()
    mutecontact: string[];

    @Column()
    blockcontact: string[];
   
}