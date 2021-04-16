<template>
  <div>
    <div class="row q-pa-md">
      <!--  <div class="col-1">
        <q-input hint="POSID" label=" 123" dense readonly />
      </div>
      <div class="col-4">
        <q-input bottom-slots dense readonly label="МО, Балашиха, Фадеева, 3"> -->
      <!-- <template v-slot:append>
            <q-icon name="edit" @click="editAdr" />
          </template> -->
      <!--
          <template v-slot:hint>
            Адрес
          </template>
        </q-input>
      </div> -->

    </div>
    <div class="q-pa-md row items-start q-gutter-lg">
      <cardStore></cardStore>
    </div>
    <!-- <div class="q-pa-md row items-start q-gutter-xl">

      <q-btn
        @click="addNewCard(6)"
        :loading="loading"
        padding="lg xs"
        color="dark"
        class="my-card"
      >
        <q-icon left name="add" />
        <template v-slot:loading>
          Создаю новую карточку...
        </template>
      </q-btn>
    </div> -->

    <!-- Тут находится кнопка редактирования карточки  -->
    <q-page-sticky position="bottom-right" :offset="[50, 25]">
      <q-btn fab icon="edit" color="orange" @click="editCards"> </q-btn>
    </q-page-sticky>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      nameReadonly: true,
      filter: ''
    }
  },
  components: {
    cardStore: () => import('../components/cardStore.vue')
  },
  methods: {
    editAdr () {
      this.$q.notify({
        message: 'Изменяем адрес торговой точки',
        color: 'grey-9',
        position: 'top',
        timeout: '50'
      })
    },
    editCards () {
      this.$q.notify({
        message: 'Жмакаю на кнопочку',
        color: 'grey-9',
        position: 'top',
        timeout: '50'
      })
    },
    addNewCard (number) {
      // we set loading state
      this.loading = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loading = false
      }, 3000)
    }
  }
}
</script>
