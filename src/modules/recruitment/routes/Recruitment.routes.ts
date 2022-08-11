import { Router } from 'express'

import { RecruitmentController } from '../controller/RecruitmentController'
import { CreateRecruitmentValidator } from '../validators/Recruitment.validators'

const recruitmentRouter = Router()

const recruitmentController = new RecruitmentController()

recruitmentRouter.post(
  '/',
  CreateRecruitmentValidator,
  recruitmentController.create
)

export default recruitmentRouter
