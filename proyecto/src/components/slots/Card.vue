<template>
  <div class="card">
    <header>
      <slot name="header">
        <h1>Título</h1>
      </slot>
    </header>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
  div.card {
    margin: 20px;
    border: 1px solid black;
    border-radius: 10px;
    width: 250px;
    box-shadow: 10px 10px 10px black;
  }

  header {
    text-align: center;
    /* border: 1px solid blue; */
  }

  div.content {
    width: 100%;
  }

  /* div.content > div { */
  div.content {
    text-align: center;
    margin: 0 auto;
    width: 80%;
  }
</style>
