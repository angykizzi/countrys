<script>
  let darkMode = false;

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    darkMode = !darkMode;
    window.document.body.classList.toggle("dark-mode");
  };
</script>

<nav class="navbar">
  <div class="nav-content">
    <div>
      <h1>Where in the world?</h1>
    </div>
    <div>
      <button on:click={toggleDarkMode}>
        {#if darkMode}
          <span>Light Mode</span>
        {:else}
          <span>Dark Mode</span>
        {/if}
      </button>
    </div>
  </div>
</nav>

<style>
  .navbar {
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-bottom: 50px;
  }
  .nav-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-content h1 {
    font-size: 1.5rem;
    color: #111;
    margin-left: 40px;
  }

  .nav-content button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #111;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 40px;
  }

  .nav-content button:hover {
    color: #333;
  }

  button {
    background-color: #f76027;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    text-transform: uppercase;
  }
  :global(body.dark-mode) button {
    color: white;
  }

  :global(body.dark-mode) .navbar {
    background-color: #1d3040;
    color: #fff;
  }

  :global(body.dark-mode) h1 {
    color: #fff;
  }
</style>
