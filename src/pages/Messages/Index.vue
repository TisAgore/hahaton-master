<template>
    <q-page>
        <div class="q-pa-md">
        <div>
            <q-btn class="button" color="secondary" @click="showWindow">Добавить сообщение</q-btn>
            <q-dialog v-model="showDialog">
            <q-card>
                <q-card-section>
                   Добавьте сообщение 
                </q-card-section>
                <q-card-section>
                    <q-input class="input_subject" standout="bg-secondary text-white" v-model="message.messageTitle" label="Тема сообщения" />
                    <q-input class="input_body" standout="bg-secondary text-white" v-model="message.messageText" label="Тело сообщения" />
                    <q-select
                        filled
                        v-model="message.sensorId"
                        multiple
                        :options="options"
                        option-label="sensorName"
                        label="Датчик"
                        style="width: 250px"
                        standout="bg-secondary"
                    />
                </q-card-section>
                <q-card-actions>
                <q-btn color="secondary" label="Закрыть" @click="closeWindow" />
                <q-btn class="button_add" color="secondary" label="Добавить" @click="addMessage"></q-btn>
                </q-card-actions>
            </q-card>
            </q-dialog>
        </div>
        <q-table
            title="Шаблон сообщений"
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
        showDialog: false,
        data: [],
        message: {
            messageTitle: '',
            messageText: '',
            sensorId: null,
        },
        columns: [
            {
            name: 'messageTemplateId',
            required: true,
            label: 'Номер',
            align: 'left',
            field: 'messageTemplateId',
            format: val => `${val}`,
            },
            { name: 'messageTitle', align: 'center', label: 'Тема сообщения', field: 'messageTitle'},
            { name: 'messageText', label: 'Тело сообщения', field: 'messageText'},
            { name: 'sensorId', label: 'Датчик', field: 'sensorId' },
        ],
        options: [
            {
                sensorName: 'Датчик 1',
            },
            {
                sensorName: 'Датчик 2',
            },
            {
                sensorName: 'Датчик 3',
            }
        ],
    };
    },
    methods: {
        showWindow() {
        this.showDialog = true;
        },
        closeWindow() {
        this.showDialog = false;
        this.message.messageTitle = '';
        this.message.messageText = '';
        this.message.sensorId = null;
        },
        async addMessage(message) {
            const request = {
                "messageText": message.messageText,
                "messageTitle": message.messageTitle,
                "sensorId": message.sensorId,
            }
            try {
                const users = await axios.post('http://localhost:3000/users/select')
                let userMessage = users.data.message
                let isSms = false
                let isEmail = false
                if (userMessage.userPhone != null && userMessage.userPhone != undefined) {
                    isSms = true
                }
                if (userMessage.userEmail != null && userMessage.userEmail != undefined) {
                    isEmail = true
                }
                let userId = userMessage.userId
                request["isSms"] = isSms
                request["isEmail"] = isEmail
                request["userId"] = userId
                const response = await axios.post('http://localhost:3000/messagetemplates/insert', request)
                console.log(response.data)
                // message.messageId = response
                this.data.push({
                    name: this.data.length + 1,
                    ...response.data.message,
                })
                this.closeWindow()
            }
            catch(error) {
                console.error(error)
            }
        },
        async getMessages() {
            try {
                const response = await this.$axios.post('http://localhost:3000/messagetemplates/select')
                console.log(response)
                this.data = response.data.message
            } catch(error) {
                console.error(error)
            }
        },
        generateSensors(sensors) {
            let sensorsList = ''
            for (let i = 0; i < sensors.length; i++) {
                if (i === sensors.length - 1) {
                    sensorsList += `${sensors[i].sensorName}`
                }
                else {
                    sensorsList += `${sensors[i].sensorName}; `
                }
                
            }
            return sensorsList
        }
    },
    async created() {
      await this.getMessages()
    }
    
}
</script>

<style>
.button{
    margin-top: 3vh;
    margin-bottom: 5vh;
}
.input_subject{
    margin-bottom: 2vh;
}
.input_body{
    margin-bottom: 2vh;
}
</style>