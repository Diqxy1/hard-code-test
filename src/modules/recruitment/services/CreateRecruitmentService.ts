import path from 'path'
import { getCustomRepository } from 'typeorm'

import { AppError } from '@shared/errors/AppError'
import EtherealMail from '@shared/http/services/EtherealMail'

import {
  SectorTechnology,
  MarketingAndSales,
  OperationAndPeople,
  Area
} from '../dto/Dto'
import { Recruitments } from '../typeorm/entities/Recruitments'
// eslint-disable-next-line import-helpers/order-imports
import { RecruitmentsRepository } from '../typeorm/repositories/RecruitmentsRepository'

// send email

// validators
import isValidDate from '../validators/checkers/dateChecker'
import emailChecker from '../validators/checkers/emailChecker'
import nameChecker from '../validators/checkers/nameChecker'
import phoneChercker from '../validators/checkers/phoneChecker'

interface IRequest {
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

class CreateRecruitmentService {
  public async execute({
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
  }: IRequest): Promise<Recruitments> {
    const recruitmentsRepository = getCustomRepository(RecruitmentsRepository)

    const validateDate = isValidDate(dateOfBirth)

    if (!validateDate) {
      throw new AppError('invalid date format', 400)
    }

    const getEmail = await recruitmentsRepository.findByEmail(email)

    if (getEmail) {
      throw new AppError('e-mail already registered', 400)
    }

    const validateEmail = emailChecker(email)

    const validateName = nameChecker(name)

    const validatePhone = phoneChercker(phone)

    if (area == Area.ProductAndTechnology) {
      for (let i = 0; i < sector.length; i++) {
        if (!(sector[i] in SectorTechnology)) {
          throw new AppError(
            'it is only possible to select technology and product sectors',
            406
          )
        }
      }
    }

    if (area == Area.ProductAndTechnology) {
      if (
        tecnology == undefined ||
        wordpress == undefined ||
        elementor == undefined ||
        nocodeLocode == undefined
      ) {
        throw new AppError(
          'the following technology fields need to be answered: [tecnology, wordpress, elementor, nocodeLocode]',
          400
        )
      }
    }

    if (area == Area.MarketingAndSales) {
      for (let i = 0; i < sector.length; i++) {
        if (!(sector[i] in MarketingAndSales)) {
          throw new AppError(
            'it is only possible to select marketing and sales',
            406
          )
        }
      }
    }

    if (area == Area.PeopleAndOperations) {
      for (let i = 0; i < sector.length; i++) {
        if (!(sector[i] in OperationAndPeople)) {
          throw new AppError(
            'it is only possible to select people and operations',
            406
          )
        }
      }
    }

    if (
      city.toUpperCase() != 'CRATO' ||
      city.toUpperCase() != 'JUAZEIRO DO NORTE'
    ) {
      availabilityForJuazeiro = null
    }

    const newRecruitment = await recruitmentsRepository.createRecruitment({
      name: validateName,
      dateOfBirth: validateDate,
      email: validateEmail,
      phone: validatePhone,
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
      // need a schools API to validate field
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

    const notify = path.resolve(__dirname, '..', 'views', 'notifycation.hbs')

    await EtherealMail.sendMail({
      to: {
        name: 'Hard Code API',
        email: 'hardcode@express.com'
      },
      subject: 'Formulario de recrutamento!',
      templateData: {
        file: notify,
        variables: {
          vacancy: newRecruitment.area,
          sector: newRecruitment.sector.toString(),
          level: newRecruitment.professionalLevel.toString(),
          time: newRecruitment.timeExperience.toString()
        }
      }
    })

    return newRecruitment
  }
}

export { CreateRecruitmentService }
