import { Area } from '../dto/Dto'
import { FakeRecruitmentsRepository } from '../repositories/fakes/FakeCustomRepository'

describe('CreateRecruitment', () => {
  it('should be able to create a new recruitment', async () => {
    const fakeCustomRepository = new FakeRecruitmentsRepository()

    const recruitment = await fakeCustomRepository.createRecruitment({
      name: 'eduardo',
      dateOfBirth: '04-05-1999',
      email: 'teste9@gmail.com',
      phone: '+5588992627672',
      city: 'cidade test',
      availabilityForJuazeiro: true,
      office: true,
      hybrid: true,
      partTime: false,
      ownAComputer: true,
      ownASmartphone: true,
      professionalExperience: true,
      currentlyWorking: true,
      partnership: true,
      technicalHighSchool: false,
      school: 'teste escola',
      trainingAndCourses: 'teste curso',
      area: Area.ProductAndTechnology,
      sector: ['FrontEnd', 'Cloud'],
      tecnology: ['python'],
      wordpress: true,
      elementor: false,
      nocodeLocode: true,
      professionalLevel: ['Pleno', 'Junior'],
      timeExperience: ['Freelancer']
    })

    expect(recruitment).toHaveProperty('createdAt')
  })
})
