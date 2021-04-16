<template>
  <div>
    <q-card>
      <q-tab-panels
        v-model="tab"
        animated
        transition-prev="fade"
        transition-next="fade"
      >
        <q-tab-panel name="defaultTab">
          <div id="tableStore">
            <tableStore></tableStore>
          </div>
        </q-tab-panel>
        <q-tab-panel name="altTab2">
          <div id="tableStore">
            <tableStore></tableStore>
          </div>
        </q-tab-panel>
        <q-tab-panel name="altTab3">
          <div id="tableStore">
            <tableStore></tableStore>
          </div>
        </q-tab-panel>
      </q-tab-panels>

      <!-- Тут находится кнопка добавить, с подвылетом.  -->

      <!-- <q-page-sticky position="bottom-right" :offset="[50, 25]">
      <q-fab
        icon="add"
        push
        direction="up"
        color="orange"
        vertical-actions-align="right"
      >
        <q-fab-action
          label-position="left"
          color="secondary"
          @click="onClick"
          icon="add_location"
          label="Новая точка"
        />
        <q-fab-action
          label-position="left"
          color="secondary"
          @click="onClick"
          icon="where_to_vote"
          label="Существующая точка"
        />
      </q-fab>
    </q-page-sticky> -->

      <!-- Футер -->

      <q-footer bordered class="bg-grey-1 text-black">
        <q-toolbar>
          <q-tabs
            v-model="tab"
            active-color="primary"
            indicator-color="primary"
            shrink
            stretch
          >
            <q-tab name="defaultTab" label="Общие" />
            <q-tab name="altTab2" label="Доп1" />
            <q-tab name="altTab3" label="Доп2" />
            <q-tab name="add" clickable @click="showNotif" icon="add" />
          </q-tabs>
        </q-toolbar>
      </q-footer>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'defaultTab'
    }
  },
  components: {
    tableStore: () => import('../components/tableStore.vue')
  },
  methods: {
    showNotif () {
      this.$q.notify({
        message: 'Добавился ещё один лист',
        color: 'grey-9',
        position: 'top',
        timeout: '50'
      })
    },
    onClick () {
      // console.log('Clicked on a fab action')
    }
  }
}
</script>
