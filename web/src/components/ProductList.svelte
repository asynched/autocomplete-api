<script>
  import ProductCard from './ProductCard.svelte'

  export let products
</script>

<div class="products">
  {#each products as product}
    <ProductCard {product} />
  {/each}
</div>

<style>
  .products {
    display: grid;
    margin: 0 auto;
    border-radius: 0.25rem;
    overflow: hidden;
    max-width: 768px;
  }
</style>
