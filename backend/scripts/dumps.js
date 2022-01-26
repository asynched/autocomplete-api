const { default: axios } = require('axios')
const fs = require('fs/promises')

const getProducts = async (term) => {
  const { data } = await axios.get(
    'https://api.mercadolibre.com/sites/MLB/search?q=' + term
  )

  return data.results
}

const transform = (products) => {
  return products.map((item) => ({
    id: item.id,
    name: item.title,
    old_price: item.original_price,
    price: item.price,
    seller: 'Asynched',
    image_url: item.thumbnail,
    installments: {
      amount: item.installments?.amount,
      quantity: item.installments?.quantity,
    },
  }))
}

const concat = (total, item) => {
  return [...total, ...item]
}

const main = async (...terms) => {
  const rawProducts = await Promise.all(terms.map(getProducts))
  const parsedProducts = rawProducts.map(transform)
  const allProducts = parsedProducts.reduce(concat, [])

  await fs.writeFile('dump.json', JSON.stringify(allProducts))
}

main(
  'iPhone',
  'Computador',
  'Celular',
  'Notebook',
  'Playstation',
  'Xbox',
  'Macbook'
)
