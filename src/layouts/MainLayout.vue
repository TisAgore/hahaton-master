<template>
  <q-layout class="body_org" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <router-link to="/">
          <img class="img1" src="~assets/toolbar.png" width="66vh" height="66vh">
        </router-link>

        <q-toolbar-title>
          <img class="img2" src="~assets/logo.png" width="150vh" height="66vh">
        </q-toolbar-title>
        <div class="navigationBlock">
          <router-link class="stata" to="/statistics">
          Статистика
        </router-link>
        <router-link class="notifications" to="/messages">
          Уведомления
        </router-link>
        <router-link class="user" to="/users">
          Пользователи
        </router-link>
         
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
      <div class="body">
        <div class="block1">
          <img class="fotoEvraz" src="~assets/fotoEvraz.png"/>
          <div class="text_evraz"><b>Evraz Group</b> — международная вертикально-интегрированная металлургическая и горнодобывающая компания с активами в Российской Федерации, США, Канаде, Чехии, Италии, Казахстане. Штаб-квартира — в Лондоне. Входит в число крупнейших производителей стали в мире.Евраз — ВикипедияОсновные направления деятельности группы — производство стали, добыча руды и угля. Часть сталепрокатных мощностей находится за пределами России. В июне 2011 года расположенные в Новокузнецке Западно-Сибирский и Новокузнецкий комбинаты были объединены в «ЕВРАЗ Объединённый Западно-Сибирский металлургический комбинат».</div>
        </div>
        <div class="block2">
          <img class="foto1" src="~assets/foto1.png"/>  
          <div class="text_statistics">Статистика — отрасль знаний, наука, в которой излагаются общие вопросы сбора, измерения, мониторинга, анализа массовых статистических данных и их сравнение; изучение количественной стороны массовых общественных явлений в числовой форме. Специалист в области статистики именуется Статистик. Статистика-статистика отправленных сообщений за все время, находящихся в базе данных, создана для ознакомления и поиска ранее отправленных сообщений.</div>
          
        </div>
        <div class="block3">
          <div class="text_message">Шаблон сообщения — это контент, который вы отправляете получателю: комбинация текста, изображений, кнопок, эмодзи и ссылок. В Messaggio для удобной работы доступны макеты шаблонов под каждый канал. На странице уведомления находиться шаблон создания сообщений и кнопка добавления сообщений в базу данных, а так же их отправки. Шаблон создания сообщений поможет правильно составить и отправить сообщения в нужный цех.</div>
          <img class="foto2" src="~assets/foto2.png"/>
        </div>
        <div class="block4">
          <img class="foto3" src="~assets/foto3.png"/>
          <div class="text_user">Пользователь — лицо или организация, которое использует действующую систему для выполнения конкретной функции. В частности, Пользователь АС — лицо, участвующее в функционировании автоматизированной системы или использующее результаты её функционирования.  На странице пользователи находиться список уже созданных пользователей, который храниться в базе данных, а так же присутствует возможность добавить новых пользователей, с определением их должности.</div>
          
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { 
    EssentialLink
  },
  data () {
    return { 
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
      // leftDrawerOpen: false,
      // essentialLinks: linksData
    }
  }
}
</script>
<style>
header{
  font-family: inherit;
  height: 11vh;
}
.img1{
  margin-top:  -2vh; 
  margin-left: 2vh;
}
.img2{
  margin-top: 2vh;
  margin-left: -1vh;
}
.navigationBlock{
  display:flex ;
  margin-right: 10vh;
  margin-top: 6vh;
}
.user{
  margin-left: 2vh;
  color: black;
  font-size: 2vh;
}
.notifications{
  margin-left: 2vh;
  color: black;
  font-size: 2vh;

}
.stata{
  color: black;
  font-size: 2vh;
}
.text_evraz{
  margin: 3vh;
  color: black;
  font-family: inherit;
  font-size: 2vh;
  width: 1300px;
}
.fotoEvraz{
  width: 150vh;
  height: 50vh;
}
.foto1{
  margin-left: 7vh ;
  width: 100vh;
  height: 60vh;
}
.block1{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block2{
  display: flex;
  justify-content: space-between;
}
.block3{
  display: flex;
  justify-content: space-between;
}
.block4{
  display: flex;
  justify-content: space-between;
}
.foto2{
  margin-left: 5vh;
  margin-right: 7vh;
  margin-top: 5vh;
  width: 100vh;
  height: 60vh;
}
.text_message{
  margin-left: 7vh;
  margin-top: 5vh;
  color: black;
  font-family: inherit;
  font-size: 2vh;
  width: 400px;
}
.text_statistics{
  margin-left: 5vh;
  margin-right: 7vh ;  
  color: black;
  font-family: inherit;
  font-size: 2vh;
  width: 400px;
}
.text_user{
  margin-top: 5vh;
  margin-left: 5vh;
  margin-right: 7vh ;  
  color: black;
  font-family: inherit;
  font-size: 2vh;
  width: 400px;
}
.foto3{
  margin-top: 5vh;
  margin-left: 7vh ;
  width: 100vh;
  height: 60vh;
}
.body_org{
  display: flex;
  justify-content: center;
}
.body{
  width: 1500px;
  height: 2700px;
  background-color: white;
  box-shadow: 0 0 15px rgba(0,0,0,0.5); 
}
</style>