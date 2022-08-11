import { getCustomRepository } from 'typeorm'

import { Recruitments } from '../typeorm/entities/Recruitments'
import { RecruitmentsRepository } from '../typeorm/repositories/RecruitmentsRepository'

class ListCandidatesService {
  public async execute(): Promise<Recruitments[] | undefined> {
    const recruitmentRepository = getCustomRepository(RecruitmentsRepository)

    const candidates = await recruitmentRepository.find({
      order: {
        name: 'ASC'
      }
    })

    return candidates
  }
}

export { ListCandidatesService }
