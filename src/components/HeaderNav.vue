<template>
  <header>
    <div class="titreNav">
      <div class="titre">
        <img class="logo_head" src="../assets/fleur.png" />
        <h1><router-link to="/" class="nav-link">MUME</router-link></h1>
      </div>
      <div class="nav">
        <nav>
          <ul>
            <li>
              <router-link to="/" class="nav-link">Présentation</router-link>
            </li>
            <li>
              <router-link to="/programmes" class="nav-link"
                >Programmes Mieux-Être</router-link
              >
            </li>
            <li>
              <router-link to="/bienetre" class="nav-link"
                >Soins Bien-Être</router-link
              >
            </li>
            <li>
              <router-link to="/espacedetente" class="nav-link"
                >Espace Détente</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="logo">
      <img src="../assets/mume-fleur.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style>
/* Titre + barre navigation */
.titreNav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;
  padding: 0;
  margin-left: 2em;
  margin-right: 2em;
  align-items: center;
}

/*Titre + mini logo */
.titre {
  display: flex;
  flex-direction: row;
  align-items: inherit;
}

h1 {
  text-shadow: rgb(248 199 168 / 60%) 0px 1.5px 6.4px;
  font-size: 2em;
  font-weight: lighter;
}

.logo_head {
  width: 2em;
  height: 3em;
  padding-top: 0.5em;
  padding-right: 0.5em;
}

/* Barre Navigation */
.nav {
  text-shadow: rgb(248 199 168 / 60%) 0px 1.5px 6.4px;
  font-size: 1em;
  padding-top: 0.5em;
}

nav ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
}

nav ul li {
  padding: 0;
  margin: 0;
  display: flex;
}

nav a {
  display: inline-block;
  width: 100%;
  text-align: center;
  margin: 0 0 0 5px;
  padding: 5px;
  text-decoration: none;
  border-bottom: 1px dashed transparent;
  line-height: 20px;
}

nav a:hover {
  border-color: rgb(248, 199, 168);
}

nav a.active {
  border-color: rgb(248, 199, 168);
  border-bottom-style: solid;
}

a {
  color: black;
  text-decoration: none;
}

/* Logo Mume */
.logo {
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
  margin-bottom: 2em;
}
</style>
