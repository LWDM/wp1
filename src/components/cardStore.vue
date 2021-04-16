<template>
  <div>
    <q-card square>
      <q-card-section class="kkm">
        <div class="text-subtitle2">{{ titleCard }}</div>
      </q-card-section>

      <q-markup-table dense>
        <tbody>
          <tr>
            <td class="text-left">{{ fieldCard1 }}</td>
            <td class="text-right">{{ dataFieldCard1 }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'cardStore',
  data () {
    return {
      titleCard: 'Название карточки',
      fieldCard1: 'Провайдер',
      dataFieldCard1: 'Энфорта'
    }
  }
}
</script>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
.my-card
  width: 25%
  max-width: 500px
.provider
  background-color: $purple-3
.ttCof
  background-color: $pink-3
.kkm
  background-color: $cyan-3
.warning
  background-color: $red
.attention
  background-color: $amber
.add_card
  background-color: $grey-5
.tt_serv
  background-color: $light-green-3
.personal
  background-color: $blue-grey-3
</style>
