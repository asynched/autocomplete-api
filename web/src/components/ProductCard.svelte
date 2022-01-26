<script>
  import { formatPrice } from '../utils/formatters'

  export let product
</script>

<div class="product">
  <img class="product__thumbnail" src={product.image_url} alt={product.name} />
  <div class="product-info">
    <h1 class="product-info__title">{product.name}</h1>
    <p class="product-info__seller">{product.seller}</p>
    <h2 class="product-info__price">{formatPrice(product.price)}</h2>
    <p class="product-info__installments">
      em <span
        >{product.installments?.quantity}x {formatPrice(
          product.installments?.amount
        )} sem juros</span
      >
    </p>
    <p class="product-info__shipping">Frete grátis</p>
  </div>
</div>

<style>
  .product {
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
    background: var(--background-primary);
    border-bottom: 1px solid var(--border);
  }

  .product__thumbnail {
    width: 6rem;
    height: 6rem;
    object-fit: contain;
  }

  .product-info__title {
    font-weight: 300;
    font-size: 1.125rem;
    color: var(--text-title);
  }

  .product-info__seller {
    margin-bottom: 1rem;
    font-size: 0.7rem;
    color: var(--text-subtitle);
  }

  .product-info__price {
    font-weight: 400;
  }

  .product-info__installments {
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }

  .product-info__installments span {
    color: var(--brand-green);
  }

  .product-info__shipping {
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--brand-green);
  }
</style>
