<script>
  import arrowLeft from "../../../lib/assets/arrow-left.svg";
  import Navbar from "../../../lib/components/NavBar.svelte";
  export let data;
</script>

<main class="principal-container">
  <Navbar />
  <a class="border-back" href="/">
    <img src={arrowLeft} alt="Go back" class="arrow-left" /> Back
  </a>
  <div class="flex">
    <div class="img-flag">
      <img src={data.detailCountry.flag} alt="Bandera" />
    </div>
    <div class="container-info">
      <h1 class="h1">{data.detailCountry.name}</h1>
      <div class="info-container">
        <div>
          <div class="info">
            <h2 class="h2">Native Name:</h2>
            <span class="span">{data.detailCountry.nativeName}</span>
          </div>
          <div class="info">
            <h2 class="h2">Population:</h2>
            <span class="span">{data.detailCountry.population}</span>
          </div>
          <div class="info">
            <h2 class="h2">Region:</h2>
            <span class="span">{data.detailCountry.region}</span>
          </div>
          <div class="info">
            <h2 class="h2">Sub Region:</h2>
            <span class="span">{data.detailCountry.subregion}</span>
          </div>
          <div class="info">
            <h2 class="h2">Capital:</h2>
            <span class="span">{data.detailCountry.capital}</span>
          </div>
        </div>
        <div>
          <div class="info">
            <h2 class="h2">Top Level Domain:</h2>
            <span class="span">{data.detailCountry.topLevelDomain}</span>
          </div>
          <div class="info">
            <h2 class="h2">Currencies:</h2>
            <span class="span"
              >{data.detailCountry.currencies?.map((el) => el.name)}</span
            >
          </div>
          <div class="info">
            <h2 class="h2">Languages:</h2>
            <span class="span"
              >{data.detailCountry.languages.map((el) => el.name)}</span
            >
          </div>
        </div>
      </div>
      <div>
        {#if (data.detailCountry.borders || []).length > 0}
          <div class="container-border">
            <h1 class="h1-border">Border Countries:</h1>
            <div class="flex-border">
              {#each data.detailCountry.borders || [] as border}
                <div class="border">
                  {border}
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</main>

<style>
  .principal-container {
    display: flex;
    flex-direction: column;
  }
  .flex {
    display: flex;
    gap: 50px;
    justify-content: center;
    height: 100%;
    margin: 40px 30px 0 30px;
  }
  .img-flag {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-flag img {
    width: 500px;
    height: auto;
  }

  .info-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .info {
    display: flex;
    align-items: flex-start;
  }

  .h1 {
    font-size: 30px;
    font-weight: 700;
    font-family: "Poppins";
    margin: 0 0 10px 0;
  }

  .h2,
  .span,
  .h1-border {
    font-size: 20px;
    margin: 0;
    font-family: "Poppins";
  }

  .h2 {
    font-weight: 600;
  }

  .span {
    margin: 0 0 10px 3px;
  }

  .h1-border {
    margin: 0 10px 0 0;
  }

  .border {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    max-width: auto;
    border: 1px solid gainsboro;
    padding: 5px 15px;
    margin: 0;
    border-radius: 4px;
    font-size: 19px;
    font-family: "Poppins";
  }

  .flex-border {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .container-border {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .border-back {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    max-width: auto;
    border: 1px solid gainsboro;
    padding: 5px 15px;
    margin: 5px 40px;
    border-radius: 4px;
    font-size: 19px;
    font-family: "Poppins";
    text-decoration: none;
    color: black;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  :global(body.dark-mode) .border-back {
    background-color: #1d3040;
    color: #fff;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
  }

  .arrow-left {
    width: 15px;
    height: 15px;
    margin: 0 5px 0 0;
  }

  :global(body) {
    background-color: #fff;
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #fff;
  }

  @media (max-width: 1024px) {
    .flex {
      display: flex;
      gap: 50px;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .container-info {
      margin: 40px 0;
    }
    .container-border {
      margin: 20px 0;
    }
  }
</style>
