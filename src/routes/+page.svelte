<script>
  import Pagination from "$lib/components/pagination.svelte";
  import Navbar from "../lib/components/NavBar.svelte";

  export let data;
  let displayedCountries = [];

  let selectedCountryName = "";
  let searchText = "";

  function handleCountryChange(event) {
    selectedCountryName = event.target.value;
  }

  // Función para normalizar el texto, removiendo acentos y convirtiendo a minúsculas
  function normalizeText(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  $: filteredCountries = data.country.filter((country) => {
    const matchesCountryName =
      selectedCountryName === "" ||
      normalizeText(country.name) === normalizeText(selectedCountryName);
    const matchesSearchText = normalizeText(country.name).includes(
      normalizeText(searchText)
    );
    return matchesCountryName && matchesSearchText;
  });
</script>

<main>
  <Navbar />
  <div class="filtros">
    <input
      type="text"
      placeholder="Search for a country..."
      on:input={(e) => (searchText = e.target.value)}
      class="inputSearch"
    />
    <select on:change={handleCountryChange}>
      <option hidden value="">Seleccione un país</option>
      <option value="">Todos</option>
      {#each data.country as { name } (name)}
        <option value={name}>{name}</option>
      {/each}
    </select>
  </div>
  <ul class="">
    {#each displayedCountries as country (country.name)}
      <a href="/country/{country.name}">
        <div class="card">
          <img src={country.image} alt={`Bandera de ${country.name}`} />
          <div class="card-content">
            <h2>{country.name}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      </a>
    {/each}
  </ul>
  <div class="pagination">
    <Pagination
      rows={filteredCountries}
      perPage={8}
      bind:trimmedRows={displayedCountries}
    />
  </div>
</main>

<style>
  main {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, auto);
    place-items: center;
    padding: 0 10px;
  }
  a {
    text-decoration: none;
  }
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    max-width: 350px;
    height: 380px;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card img {
    width: 350px;
    height: 200px;
  }

  .card-content {
    padding: 20px;
  }

  .card-content h2,
  .card-content p {
    margin: 10px 0;
    color: black;
  }

  .inputSearch {
    width: 300px;
    padding: 10px 30px;
    margin: 0;
    border: none;
    outline: none;
    border-radius: 10px;
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    background: #ffffff
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23BBBBBB" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>')
      no-repeat 10px center;
    background-size: 20px 20px;
  }

  /* Estilo para el select */
  select {
    width: 200px;
    padding: 10px 15px;
    border-radius: 2px;
    border: none;
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="%23000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 8l5 5 5-5H5z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }

  select option {
    padding: 10px;
  }

  .filtros {
    display: flex;
    justify-content: space-between;
    margin: 0 40px;
  }

  .pagination {
    margin: 10px 0;
  }

  :global(body.dark-mode) .card {
    background-color: #2a3c4a;
    color: #fff;
    border: none;
  }

  :global(body.dark-mode) .card-content h2,
  :global(body.dark-mode) .card-content p {
    color: #fff;
  }

  :global(body.dark-mode) .inputSearch,
  :global(body.dark-mode) select {
    background-color: #2a3c4a;
    color: #fff;
  }

  @media (max-width: 1400px) {
    .card img {
      width: 280px;
    }
  }

  @media (max-width: 1200px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
    .card img {
      width: 250px;
    }
  }

  @media (max-width: 769px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
    .filtros {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }

  @media (max-width: 500px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
    .card img {
      width: 290px;
      height: 150px;
    }

    .inputSearch {
      width: 200px;
      padding: 10px 30px;
    }
  }
</style>
