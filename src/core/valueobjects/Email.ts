export class Email {
    private readonly email: string

    public constructor (email: string) {
        console.log('passei por construcao do email')

      if (email ==='joao') {
          throw new Error('Email invalido');
      }      

      this.email = email
      Object.freeze(this)
    }

}