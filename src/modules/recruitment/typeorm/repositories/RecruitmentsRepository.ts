import { EntityRepository, Repository } from 'typeorm'

import { Area } from '@modules/recruitment/dto/Dto'

import { Recruitments } from '../entities/Recruitments'

interface ICreateRecruitment {
  name: string
  dateOfBirth: string
  email: string
  phone: string
  city: string
  availabilityForJuazeiro: boolean | null
  office: boolean
  hybrid: boolean
  partTime: boolean
  ownAComputer: boolean
  ownASmartphone: boolean
  professionalExperience: boolean
  currentlyWorking: boolean
  partnership: boolean
  technicalHighSchool: boolean
  school: string
  trainingAndCourses: string
  area: Area
  sector: string[]
  tecnology: string[] | null
  wordpress: boolean | null
  elementor: boolean | null
  nocodeLocode: boolean | null
  professionalLevel: string[]
  timeExperience: string[]
}

@EntityRepository(Recruitments)
class RecruitmentsRepository extends Repository<Recruitments> {
  public async createRecruitment({
    name,
    dateOfBirth,
    email,
    phone,
    city,
    availabilityForJuazeiro,
    office,
    hybrid,
    partTime,
    ownAComputer,
    ownASmartphone,
    professionalExperience,
    currentlyWorking,
    partnership,
    technicalHighSchool,
    school,
    trainingAndCourses,
    area,
    sector,
    tecnology,
    wordpress,
    elementor,
    nocodeLocode,
    professionalLevel,
    timeExperience
  }: ICreateRecruitment): Promise<Recruitments> {
    const newRecruitment = this.create({
      name,
      dateOfBirth,
      email,
      phone,
      city,
      availabilityForJuazeiro,
      office,
      hybrid,
      partTime,
      ownAComputer,
      ownASmartphone,
      professionalExperience,
      currentlyWorking,
      partnership,
      technicalHighSchool,
      school,
      trainingAndCourses,
      area,
      sector,
      tecnology,
      wordpress,
      elementor,
      nocodeLocode,
      professionalLevel,
      timeExperience
    })

    await this.save(newRecruitment)

    return newRecruitment
  }

  public async findByEmail(email: string): Promise<Recruitments | undefined> {
    const _email = await this.findOne({
      where: { email }
    })

    return _email
  }
}

export { RecruitmentsRepository }
