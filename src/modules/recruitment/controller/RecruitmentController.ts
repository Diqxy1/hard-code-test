import { Request, Response } from 'express'

import { CreateRecruitmentService } from '../services/CreateRecruitmentService'
import { DeleteCandidatesService } from '../services/DeleteCandidatesService'
import { ListCandidatesService } from '../services/ListCandidatesService'

export default class RecruitmentController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listCandidates = new ListCandidatesService()

    const candidates = await listCandidates.execute()

    return response.status(302).json(candidates)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body

    const createRecruitmentService = new CreateRecruitmentService()

    const createRecruitment = await createRecruitmentService.execute({
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

    return response.status(201).json(createRecruitment)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteCandidate = new DeleteCandidatesService()

    await deleteCandidate.execute({ id })

    return response.status(200).json('candidate successfully removed')
  }
}

export { RecruitmentController }
