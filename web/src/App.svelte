<script>
  import Header from './components/Header.svelte'
  import Loader from './components/Loader.svelte'
  import ProductList from './components/ProductList.svelte'
  import Autocomplete from './services/http/autocomplete'

  import { searchStore } from './stores/search-store'

  $: queryPromise = Autocomplete.query($searchStore.term)
</script>

<Header />

<section class="products-section">
  <div class="container">
    <div class="search-term">
      <p>Você está buscando por {$searchStore.term.toUpperCase()}</p>
    </div>

    {#await queryPromise}
      <div
        style="display: grid; height: calc(100vh - 16rem); place-items: center;"
      >
        <Loader />
      </div>
    {:then products}
      <ProductList {products} />
    {/await}
  </div>
</section>

<style>
  .products-section {
    padding: 2rem 0;
  }

  .search-term {
    margin: 0 auto;
    margin-bottom: 2rem;
    max-width: 768px;
  }
</style>
