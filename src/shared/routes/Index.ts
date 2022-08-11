import { Router } from 'express'

import recruitmentRouter from '@modules/recruitment/routes/Recruitment.routes'

const routes = Router()

routes.use('/recruitment/', recruitmentRouter)

export { routes }
