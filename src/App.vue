<script lang="ts">

  import Teste from './components/Teste.vue';

  export default {
    name: 'App',
    components: { Teste }
  };
</script>

<template>

  <main>

      <section class="box">

        <header>

          <h2>Login</h2>
          <h2>Cadastro</h2>

        </header>

        <form @submit.prevent="">
          
          <label>
            <input class="nosubmit" type="text" placeholder="Nome">
            <img src="" alt="">
          </label>

          <label>
            <input class="nosubmit" type="email" placeholder="Email">
          </label>

          <label>
            <input class="nosubmit" type="text" placeholder="Curso">
          </label>

          <label>
            <input class="nosubmit" type="password" placeholder="Senha">
          </label>

          <input id="cadastro" type="submit" value="Cadastrar">

        </form>

      </section>
    </main>
</template>

<style scoped lang="scss">
  main {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('./assets/background-cadastro.png');
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 110vh;
    color: white;
    padding-bottom: 24px;
  }

  h2 {
    display: inline-flex;
    margin: auto 35px 15px 35px;
    margin-right: 35px;
    margin-bottom: 15px;
  }

  form {
    flex: 1 1 0%;
    display: block;
    border-radius: 0px 0px 24px 24px;
    background-color: var(--purple);
    color: black;
    padding: 64px 24px;
    width: 40%;
  }

  header {
    display: block;
    text-align: center;
    border-radius: 24px 24px 0px 0px;
    background-color: #827EFF;
    color: white;
    padding: 32px 24px;
    width: 40%;
  }

  label {
    display: block;
    margin-bottom: 24px;
  }

  label span {
    display: block;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  input.nosubmit {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    padding: 24px;
    font-size: 20px;
    color: white;
  }

  .nosubmit::placeholder {
    font-size: 20px;
    color: white;
  }

  #cadastro {
    font-size: 1.5em;
    display: block;
    width: fit-content;
    margin: 64px auto;
    color: white;
    background: var(--pink);
    padding: 16px;
    border-radius: 16px;
    transition: 0.2s ease;
  }

  #cadastro:hover {
    background-color: var(--pink-dark);
  }

</style>