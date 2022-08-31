<template>
  <div id="presentation">
    <article id="mume" class="rubrique">
      <div id="textPresentation">
        <h2>Vers le mieux-être</h2>
        <article class="sous-rubrique">
          <p class="description">
            Bienvenu chez MUME ! Un spa tourné vers le mieux-être au quotidiens
            grâce au bien-fait de techniques corporelles (massages) et
            d'ateliers agencés dans des programmes personnalisés et adaptés à
            chacun. Et accessible grâce à du matériel de transfert.
          </p>
          <p class="description">
            Au Japon, Mume désigne l'abricotier ou la fleur d'abricotier et de
            prunier, connus aussi sous le non de Ume et symbolise la force, la
            santé ainsi que la capacité à surmonter une période difficile mais
            aussi l'arrivée prochaine du printemps et le renouveau. Souvent
            utilisée en médecine chinoise pour rééquilibrer l'énergie, cette
            fleur représente l'idée d'aller mieux et d'avoir la force et la
            patience d'y arriver.
          </p>
          <p class="description">
            Nous avons choisi ce symbole car chez Mume, nous mettons tout en
            œuvre pour vous apporter bien-être et équilibre.
          </p>
        </article>
      </div>
      <div id="imgPresentation">
        <div class="img2"><img src="../assets/pierreschaudesprofil.jpg" /></div>     
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Presentation",
  components: {},
};
</script>

<style scoped>
#presentation {
  margin: 4em;
  height: 100%;
}

article {
    text-shadow: rgb(248 199 168 / 60%) 0px 1.5px 6.4px;
    font-size: 1em;
}

#mume {
  margin-bottom: 2em;
}

#imgPresentation {
  display: flex;
  flex-direction: column;
  float: right;
  align-items: flex-start;
}

.img1 {
  height: 30%;
}

#textPresentation {
  border: 0.2em solid rgb(248 199 168 /40%);
  border-radius: 0.5em;
  background-color: white;
  padding: 1.5em;
  margin-top: 2em;
  width: 55%;
  float: left;
  position: absolute;
}

h2 {
  margin: 0;
  font-weight: lighter;
}
</style>
