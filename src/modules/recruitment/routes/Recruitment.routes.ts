import { Router } from 'express'

import { RecruitmentController } from '../controller/RecruitmentController'
import { CreateRecruitmentValidator } from '../validators/Recruitment.validators'

const recruitmentRouter = Router()

const recruitmentController = new RecruitmentController()

recruitmentRouter.get('/', recruitmentController.list)
recruitmentRouter.post(
  '/',
  CreateRecruitmentValidator,
  recruitmentController.create
)
recruitmentRouter.delete('/', recruitmentController.delete)

export default recruitmentRouter
