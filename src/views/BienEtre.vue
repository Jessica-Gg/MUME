<template>
  <article id="soins-bien-etre" class="rubrique">
    <h2>Soins Bien-Être</h2>
    <p>
      Massages en soins uniques. Chaque technique corporelle employée respecte
      la philosophie de la culture dont elle est issue.
    </p>
    <article class="prestation shiatsu">
      <h3>Bilan Shiatsu</h3>
      <div class="duree">1h30</div>
      <div class="tarif">130&nbsp;€</div>
      <p class="description">
        Massage lent, appuyé, peu profond. Il peut être réalisé habillé avec une
        tenue légère non serrée. Sans huile (sauf sur le ventre). Le Shiatsu est
        un art traditionnel ancestral japonais qui s'effectue par pressions des
        pouces, des paumes et des avant-bras sur l'ensemble du corps.
        Littéralement, Shiatsu signifie «pression des doigts». Idéal en
        premier massage, il permet de faire un bilan grâce au «Hara» (le
        ventre). Certainement le massage le plus complet.
      </p>
    </article>
    <article class="prestation energy">
      <h3>Massage énergisant</h3>
      <div class="duree">1h</div>
      <div class="tarif">90&nbsp;€</div>
      <p class="description">
        Massage dynamique qui intègre mobilisation, pétrissages,
        digitopressions, lissages rythmés et profonds sur l'ensemble du corps.
        Huilé. Grâce aux techniques du Thaïlandais à l'huile, ce massage profond
        contribue à un complet relâchement musculaire, raffermit et tonifie le
        corps. Il permet de retrouver vigueur et vitalité et d'éliminer blocage
        et fatigue.
      </p>
    </article>
    <article class="prestation drain">
      <h3>Massage drainant</h3>
      <div class="duree">1h</div>
      <div class="tarif">90&nbsp;€</div>
      <p class="description">
        Massage rapide, appuyé, tournant, sculptant et huilé. Il s'agit de
        produire des effets dynamisants, drainants, circulatoires, énergétiques
        et relaxants. Originaire de Bali, ce massage est une combinaison de
        plusieurs techniques influencée par les philosophies chinoise, indienne
        et thaïlandaise pour entretenir une bonne condition physique.
      </p>
    </article>
    <article class="prestation detente">
      <h3>Massage détente</h3>
      <div class="duree">1h</div>
      <div class="tarif">90&nbsp;€</div>
      <p class="description">
        Massage huilé, doux et lent. Il n'a que peu ou pas de pression. Ce
        massage vient d'une technique corporelle de bien-être issue de
        l'Ayurveda, «l'Abhyanga». Elle a pour but, grâce à son rythme modéré
        et fluide, d'harmoniser le corps et l'esprit. Elle a aussi une visée
        préventive sur la santé et le bien-être en général. Ce massage apporte
        un apaisement général et un grand lâcher prise.
      </p>
    </article>
    <article class="prestation serenity">
      <h3>Massage sérénité</h3>
      <div class="duree">1h</div>
      <div class="tarif">90&nbsp;€</div>
      <p class="description">
        Massage assis sur tabouret, doux, ferme et huilé du haut du dos, des
        épaules, des bras, la nuque, la tête et le visage. utilisant la
        technique indienne «Shirotchampi». Il est composé de techniques de
        glissés, frictions, pétrissages et percussions. Idéal pour calmer
        l'anxiété et atténuer la fatigue et les maux de dos, il procure calme et
        sérénité et libère la tête.
      </p>
    </article>
    <article class="prestation relax">
      <h3>Massage relaxant</h3>
      <div class="duree">1h</div>
      <div class="tarif">90&nbsp;€</div>
      <p class="description">
        Lent, doux et relaxant, ce massage se pratique avec l'utilisation de
        pierres chaudes. Il peut être pratiqué sur les vêtements légers et non
        serrés. La diffusion lente de la chaleur associé à des pressions douces
        sur des zones précises permet un profond relâchement musculaire et une
        relaxation du corps et de l'esprit.
      </p>
    </article>
    <article class="prestation reflex">
      <h3>Réflexologie plantaire</h3>
      <div class="duree">1h</div>
      <div class="tarif">80&nbsp;€</div>
      <p class="description">
        Massage doux, lent et relaxant des pieds et des mollets. Il se pratique
        habillé en position assise ou allongée, par digitopressions. Issue d'une
        médecine holistique, cette technique permet de déclencher une
        auto-régulation des besoins spécifiques de chaque individu en apportant
        une grande relaxation, équilibre et légerté.
      </p>
    </article>
  </article>
</template>

<script>
export default {
  name: "Soins",
};
</script>

<style scoped>
#soins-bien-etre{
    margin: 4em;
}

article {
    text-shadow: rgb(248 199 168 / 60%) 0px 1.5px 6.4px;
    font-size: 1em;
}

h2,
h3 {
  font-weight: lighter;
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
  height: 15em;
  background-color: rgba(250, 246, 244, 0.719);
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

.prestation .description {
  display: flex;
  justify-content: flex-start;
  padding: 5px 60px 0 20px;
  margin: 5px 0 25px;
  font-size: 1.1em;
}
.prestation .tarif {
  text-align: right;
  position: absolute;
  top: 32px;
  right: 1.5em;
}
</style>