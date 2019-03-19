<template>
    <div class="lang">
        <v-select label="countryName" :options="options"></v-select>
        <!-- <p>{{ message[currentLocale] }}</p> -->
    </div>
</template>

<script>
    export default {
        data: {
            options: [
      { countryCode: "AU", countryName: "Australia" },
      { countryCode: "CA", countryName: "Canada" },
            ],
            message: {
                en: 'Hello you, Vue.js!',
            de: "Hallo du, Vuejs"
            },
            currentLocale:'en',
            locales: [ {id: 'en', name: 'English'}, {id: 'de', name: 'Deutsch'}]
        }
    }
</script>
