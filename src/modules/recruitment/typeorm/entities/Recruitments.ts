import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn
} from 'typeorm'

import { Area } from '@modules/recruitment/dto/Dto'

@Entity()
class Recruitments {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string

  @Column()
  dateOfBirth: string

  @Column()
  email: string

  @Column()
  phone: string

  @Column()
  city: string

  // work in person in our office
  @Column()
  office: boolean

  // work hybrid model
  @Column()
  hybrid: boolean

  @Column()
  partTime: boolean

  @Column()
  ownAComputer: boolean

  @Column()
  ownASmartphone: boolean

  @Column()
  professionalExperience: boolean

  @Column()
  currentlyWorking: boolean

  // do you know what a partnership
  @Column()
  partnership: boolean

  @Column()
  technicalHighSchool: boolean

  @Column()
  school: string

  @Column()
  trainingAndCourses: string

  @Column({
    type: 'enum',
    enum: Area
  })
  area: Area

  @Column()
  sector: string[]

  @Column()
  professionalLevel: string[]

  @Column()
  timeExperience: string[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export { Recruitments }
