class Contact {
  name: string
  lastName: string
  telephone: number
  email: string

  constructor(
    name: string,
    lastName: string,
    telephone: number,
    email: string
  ) {
    this.name = name
    this.lastName = lastName
    this.telephone = telephone
    this.email = email
  }
}

export default Contact
