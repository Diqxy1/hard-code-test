import { AppError } from '@shared/errors/AppError'

// eslint-disable-next-line
export default function phoneChecker(phone: string) {
  if (phone.length >= 14) {
    const regex =
      /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm

    const nameChecker = regex.test(phone)

    if (nameChecker == false) {
      throw new AppError('Invalid character in phone', 406)
    }

    return phone
  } else {
    throw new AppError('Your name cannot be less than 3 characters', 406)
  }
}
