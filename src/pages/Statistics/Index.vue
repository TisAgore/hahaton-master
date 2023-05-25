<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Статистика сообщений"
        :data="data"
        :columns="columns"
        row-key="name"
      />
    </div>  
  </q-page>  
</template>

<script>
export default {
    data () {
    return { 
        columns: [
            {
            name: 'userId',
            required: true,
            label: 'ФИО',
            align: 'left',
            field: 'userFio',
            format: val => `${val}`,
            },
            { name: 'WorkShop', align: 'center', label: 'Цех', field: 'workshopId'},
            { name: 'Line', label: 'Участок', field: 'lineId'},
            { name: 'Sensor', label: 'Датчик', field: 'sensorId' },
            { name: 'Text', label: 'Тело сообщения', field: 'messageText' },
            { name: 'Title', label: 'Заголовок', field: 'messageTitle' },
            { name: 'Sms', label: 'Sms', field: 'isSms'},
            { name: 'Email', label: 'Email', field: 'isEmail'}
        ],
        data: []
        // leftDrawerOpen: false,
        // essentialLinks: linksData
      }
    },
    methods: {
      async getStatistics() {
        try {
          const response = await this.$axios.post('http://localhost:3000/statistics/select')
          console.log(response)
          this.data = response.data.message
        } catch(error) {
          console.error(error)
        }
      }
    },
    async created() {
      await this.getStatistics()
    }
}
</script>

<style>

</style>