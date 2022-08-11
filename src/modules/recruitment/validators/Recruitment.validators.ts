import { celebrate, Joi, Segments } from 'celebrate'

import {
  Area,
  ProfessionalLevel,
  TimeExperience
} from '@modules/recruitment/dto/Dto'

export const CreateRecruitmentValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    dateOfBirth: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    city: Joi.string().required(),
    office: Joi.boolean().required(),
    hybrid: Joi.boolean().required(),
    partTime: Joi.boolean().required(),
    ownAComputer: Joi.boolean().required(),
    ownASmartphone: Joi.boolean().required(),
    professionalExperience: Joi.boolean().required(),
    currentlyWorking: Joi.boolean().required(),
    partnership: Joi.boolean().required(),
    technicalHighSchool: Joi.boolean().required(),
    school: Joi.string().required(),
    trainingAndCourses: Joi.string().required(),
    area: Joi.string()
      .valid(
        Area.MarketingAndSales,
        Area.PeopleAndOperations,
        Area.ProductAndTechnology
      )
      .required(),
    sector: Joi.array().required(),
    professionalLevel: Joi.array()
      .items(
        Joi.string().valid(
          ProfessionalLevel.Apprentice,
          ProfessionalLevel.Junior,
          ProfessionalLevel.Manager,
          ProfessionalLevel.Pleno,
          ProfessionalLevel.Senior,
          ProfessionalLevel.Specialist
        )
      )
      .required(),
    timeExperience: Joi.array()
      .items(
        Joi.string().valid(
          TimeExperience.Freelancer,
          TimeExperience.LessThanAYear,
          TimeExperience.NoCompanyExperience,
          TimeExperience.UpToFiveYears,
          TimeExperience.UpToTenYears,
          TimeExperience.UpToThreeYears,
          TimeExperience.UpToTwentYears
        )
      )
      .required()
  }
})
