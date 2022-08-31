<template>
  <article id="programmes-mieux-etre" class="rubrique">
    <h2>Programmes Mieux-Être</h2>
    <article class="sous-rubrique">
      <p class="description">
        Les programmes sont personnalisés afin de répondre efficacement à vos
        besoins.
      </p>
      <p class="description">
        Chaque programme mieux-être s'établira sur la base d'un premier bilan
        shiatsu qui pourra être accompagné d'un échange pour cibler plus
        précisément vos besoins.
      </p>
    </article>
    <div class="allprestations">
      <article class="prestation">
        <h3>Court</h3>
        <div class="tarif">330&nbsp;€</div>
        <div class="description">
          <ul>
            <li>1 Bilan Shiatsu de 1h30</li>
            <li>3 Soins de 1h</li>
          </ul>
        </div>
      </article>
      <article class="prestation">
        <h3>Intermédiaire</h3>
        <div class="tarif">650&nbsp;€</div>
        <div class="description">
          <ul>
            <li>1 Bilan Shiatsu de 1h30</li>
            <li>3 Soins de 1h</li>
            <li>1 Bilan Shiatsu de 1h30</li>
            <li>3 Soins de 1h</li>
          </ul>
        </div>
      </article>
      <article class="prestation">
        <h3>Long</h3>
        <div class="tarif">330&nbsp;€</div>
        <div class="description">
          <ul>
            <li>1 Bilan Shiatsu de 1h30</li>
            <li>4 Soins de 1h</li>
            <li>1 Bilan Shiatsu de 1h30</li>
            <li>3 Soins de 1h</li>
            <li>1 Bilan Shiatsu de 1h30</li>
            <li>2 Soins de 1h</li>
          </ul>
        </div>
      </article>
      <article class="prestation">
        <h3>Cure détox</h3>
        <div class="tarif">sur devis</div>
        <div class="description">
          <ul>
            <li>Programme personnalisé</li>
          </ul>
        </div>
      </article>
    </div>
  </article>
</template>

<script>
export default {
  name: "Programmes",
};
</script>

<style scoped>
#programmes-mieux-etre {
  margin: 2em;
}

article {
    text-shadow: rgb(248 199 168 / 60%) 0px 1.5px 6.4px;
    font-size: 1em;
}

h2,
h3 {
  font-weight: lighter;
}

.sous-rubrique .description {
  padding: 5px 20px 0;
  margin: 5px 0 25px;
}

.allprestations{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  animation: programmes_animation 2s backwards;
  transition: 2s;
}
.prestation {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  border: 0.2em solid rgb(248 199 168 /40%);
  border-radius: 0.5em;
  box-shadow: 0.2em 0.2em rgb(248 199 168 /40%);
  margin-bottom: 1.5em;
  margin-right: 1.5em;
  padding: 1.5em;
  width: 40%;
  height: 10em;
  background-color: rgba(250, 246, 244, 0.719);
  background: url(../assets/dbrrcod-ead39192-55d8-4490-919a-0d8b143e9296.png) right;
  background-size: contain;
  background-repeat: no-repeat;
}

.prestation h3 {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 0;
}
.prestation .duree {
  text-align: right;
  display: flex;
  flex: 3 auto;
  justify-content: flex-end;
  position: absolute;
  top: 32px;
  right: 8em;
  width: 7em;
}
.prestation .tarif {
  text-align: right;
  position: absolute;
  top: 32px;
  right: 1.5em;
}
.prestation .description {
  display: flex;
  justify-content: flex-start;
  padding: 5px 60px 0 20px;
  margin: 5px 0 25px;
}
.prestation .description ul {
  margin: 0 0 0 20px;
  padding: 0;
}

/* ANIMATIONS */
@keyframes programmes_animation{
   from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>