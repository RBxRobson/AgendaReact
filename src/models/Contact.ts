class Contact {
  name: string
  lastName: string
  telephone: number
  email: string
  colorContact: string

  constructor(
    name: string,
    lastName: string,
    telephone: number,
    email: string,
    colorContact: string
  ) {
    this.name = name
    this.lastName = lastName
    this.telephone = telephone
    this.email = email
    this.colorContact = colorContact
  }
}

export default Contact
