import { Area } from '@modules/recruitment/dto/Dto'
import { Recruitments } from '@modules/recruitment/typeorm/entities/Recruitments'

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

class FakeRecruitmentsRepository {
  private recruitments: Recruitments[] = []

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
    const recruitment = new Recruitments()

    recruitment.name = name
    recruitment.dateOfBirth = dateOfBirth
    recruitment.email = email
    recruitment.phone = phone
    recruitment.city = city
    recruitment.availabilityForJuazeiro = availabilityForJuazeiro
    recruitment.office = office
    recruitment.hybrid = hybrid
    recruitment.partTime = partTime
    recruitment.ownAComputer = ownAComputer
    recruitment.ownASmartphone = ownASmartphone
    recruitment.professionalExperience = professionalExperience
    recruitment.currentlyWorking = currentlyWorking
    recruitment.partnership = partnership
    recruitment.technicalHighSchool = technicalHighSchool
    recruitment.school = school
    recruitment.trainingAndCourses = trainingAndCourses
    recruitment.area = area
    recruitment.sector = sector
    recruitment.tecnology = tecnology
    recruitment.wordpress = wordpress
    recruitment.elementor = elementor
    recruitment.nocodeLocode = nocodeLocode
    recruitment.professionalLevel = professionalLevel
    recruitment.timeExperience = timeExperience
    recruitment.createdAt = new Date(Date.now())

    this.recruitments.push(recruitment)

    return recruitment
  }

  //public async findByEmail(email: string): Promise<Recruitments | undefined> {}
}

export { FakeRecruitmentsRepository }
