class Contact {
  id: number
  name: string
  telephone: string
  email: string
  colorContact: string

  constructor(
    id: number,
    name: string,
    telephone: string,
    email: string,
    colorContact: string
  ) {
    this.id = id
    this.name = name
    this.telephone = telephone
    this.email = email
    this.colorContact = colorContact
  }
}

export default Contact
