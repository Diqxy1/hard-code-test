import { getCustomRepository } from 'typeorm'

import { AppError } from '@shared/errors/AppError'

import { RecruitmentsRepository } from '../typeorm/repositories/RecruitmentsRepository'

interface IRequest {
  id: string
}

class DeleteCandidatesService {
  public async execute({ id }: IRequest): Promise<void> {
    const recruitmentRepository = getCustomRepository(RecruitmentsRepository)

    const candidate = await recruitmentRepository.findOne(id)

    if (!candidate) {
      throw new AppError('Candidate not found', 404)
    }

    await recruitmentRepository.remove(candidate)
  }
}

export { DeleteCandidatesService }
