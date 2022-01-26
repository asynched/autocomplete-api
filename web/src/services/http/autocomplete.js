import { parseJSON } from '../../utils/fetch'

export default class Autocomplete {
  static async query(term) {
    const data = await fetch(
      'http://localhost:3333/autocomplete?query=' + term
    ).then(parseJSON)

    return data
  }
}
