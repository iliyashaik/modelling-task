export type state = {
  email: string,
  password: string,
  name: string,
  accountType: regularAccount | pocketAccount,
  payment: internationalPayments
}

export type regularAccount = {
  type: 'REGULAR',
  IBAN: string,
  curreny: 'DKK'
}

export type pocketAccount = {
  type: 'POCKET',
  name: string,
  IBAN: string,
  curreny: string[] // Can add multiple currency code in the array
}

export type internationalPayments = {
  SWIFT : string
} & Pick<pocketAccount, 'IBAN'>;
