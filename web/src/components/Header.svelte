<script>
  import { searchStore } from '../stores/search-store'
  import logo from '../assets/logo.png'
</script>

<header>
  <div class="container">
    <div class="header-search">
      <img src={logo} alt="logo" />
      <form class="search-form">
        <input type="text" bind:value={$searchStore.term} />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
    <div class="header-categories">
      <span>Categorias</span>
      <span>Ofertas do dia</span>
      <span>Histórico</span>
      <span>Supermercado</span>
      <span>Moda</span>
      <span>Vender</span>
      <span>Contato</span>
    </div>
  </div>
</header>

<style>
  header {
    padding: 1rem 0;
    background: var(--brand-color);
    border-bottom: 1px solid var(--border-dark);
  }

  .header-search {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .header-search img {
    width: 6rem;
  }

  .header-categories {
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 0.9rem;
    color: var(--text-title);
  }

  .search-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.25rem;
    width: 100%;
    max-width: 512px;
    background: var(--background-primary);
    overflow: hidden;
    box-shadow: 0.05rem 0.05rem 0.125rem rgba(0, 0, 0, 0.125);
  }

  .search-form input {
    padding: 0.75rem 1.5rem;
    border: none;
    outline: none;
    color: var(--text-title);
  }

  .search-form button {
    padding-right: 0.75rem;
    background: none;
    color: var(--text-title);
    border: none;
  }

  .search-form button svg {
    width: 1rem;
    height: 1rem;
  }
</style>
