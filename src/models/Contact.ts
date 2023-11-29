class Contact {
  name: string
  telephone: number | string
  email: string
  colorContact: string

  constructor(
    name: string,
    telephone: number,
    email: string,
    colorContact: string
  ) {
    this.name = name
    this.telephone = telephone
    this.email = email
    this.colorContact = colorContact
  }
}

export default Contact
