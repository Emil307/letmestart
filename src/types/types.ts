export interface IUser {
  id: number,
  email: string,
  password: string,
}

export interface IWords {
  id: number,
  title: string,
}

export interface IWord {
  id: number,
  words_id: number,
  value: string,
  translate: string,
  img: string,
  transcription: string,
}