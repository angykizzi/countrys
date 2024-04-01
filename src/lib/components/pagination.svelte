<script>
  import Icon from "./Icon.svelte";

  export let rows;
  export let perPage;
  export let trimmedRows;

  $: totalRows = rows.length;
  $: currentPage = 0;
  $: totalPages = Math.ceil(totalRows / perPage);
  $: start = currentPage * perPage;
  $: end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1;

  $: trimmedRows = rows.slice(start, end + 1);

  $: totalRows, (currentPage = 0);
  $: currentPage, start, end;
</script>

{#if totalRows && totalRows > perPage}
  <div class="pagination">
    <button
      on:click={() => (currentPage -= 1)}
      disabled={currentPage === 0 ? true : false}
      aria-label="left arrow icon"
      aria-describedby="prev"
    >
      <Icon name="arrow" direction="s" />
    </button>
    <span id="prev" class="sr-only">Load previous {perPage} rows</span>
    <p>{start + 1} - {end + 1} of {totalRows}</p>
    <button
      on:click={() => (currentPage += 1)}
      disabled={currentPage === totalPages - 1 ? true : false}
      aria-label="right arrow icon"
      aria-describedby="next"
    >
      <Icon name="arrow" direction="n" />
    </button>
    <span id="next" class="sr-only">Load next {perPage} rows</span>
  </div>
{/if}

<style>
  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    padding: 10px 20px;
    border-radius: 5px;
    gap: 10px;
  }

  .pagination p {
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
    color: #333;
  }

  button {
    background: none;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
  }

  button:hover,
  button:focus {
    background-color: #f0f0f0;
  }

  button:disabled {
    color: #ccc;
    cursor: default;
  }

  button:disabled:hover,
  button:disabled:focus {
    background: none;
  }

  .icon {
    font-size: 1.2rem;
    color: #333;
  }

  :global(body.dark-mode) .pagination,
  :global(body.dark-mode) .pagination p {
    background-color: #1d3040;
    color: #fff;
  }

  :global(body.dark-mode) button:hover,
  :global(body.dark-mode) button:focus {
    background-color: #f0f0f0;
  }
</style>
