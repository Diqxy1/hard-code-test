import { Request, Response } from 'express'

import { CreateRecruitmentService } from '../services/CreateRecruitmentService'

export default class RecruitmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      dateOfBirth,
      email,
      phone,
      city,
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
      professionalLevel,
      timeExperience
    } = request.body

    const createRecruitmentService = new CreateRecruitmentService()

    const createRecruitment = await createRecruitmentService.execute({
      name,
      dateOfBirth,
      email,
      phone,
      city,
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
      professionalLevel,
      timeExperience
    })

    return response.json(createRecruitment)
  }
}

export { RecruitmentController }
