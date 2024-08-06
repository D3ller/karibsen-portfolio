<script setup lang="ts">
import Buttons from "~/components/buttons.vue";
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';

const extensions = {AutoScroll};
import '../karibsen.d.ts'
import ProjectList from "~/components/home/project-list.vue";

let token = ref();
let name = ref(null);
let email = ref(null);
let message = ref(null);
let alert = ref({error: false, message: ''});

useHead({
  title: 'Corentin - Full-stack developper',
  description: 'Corentin, full-stack developper based in Paris/Troyes. Passionate about creating beautiful and functional websites and applications.',
  meta: [
    {name: 'keywords', content: 'corentin, full-stack, developper, paris, troyes, web, website, application, front-end, back-end'},
    {name: 'author', content: 'Corentin'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {name: 'theme-color', content: '#bababa'},
    {name: 'msapplication-TileColor', content: '#bababa'},
    {name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
    {name: 'apple-mobile-web-app-status-bar-style ', content: 'black-translucent'},
    {name: 'twitter:creator', content: '@karibsenstudio'},
    {name: 'twitter:site', content: '@karibsenstudio'},
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: 'Corentin - Full-stack developper'},
    {name: 'twitter:description', content: 'Corentin, full-stack developper based in Paris/Troyes. Passionate about creating beautiful and functional websites and applications.'},
    {name: 'twitter:image', content: '/icon.png'},
    {name: 'og:title', content: 'Corentin - Full-stack developper'},
    {name: 'og:description', content: 'Corentin, full-stack developper based in Paris/Troyes. Passionate about creating beautiful and functional websites and applications.'},
    {name: 'og:url', content: 'https://karibsen.fr'},
]
})

const icons = ref<{ name: string }[]>([
  {name: 'simple-icons:tailwindcss'},
  {name: 'simple-icons:vuedotjs'},
  {name: 'simple-icons:sass'},
  {name: 'simple-icons:nuxtdotjs'},
  {name: 'simple-icons:bootstrap'},
  {name: 'simple-icons:html5'},
  {name: 'simple-icons:css3'},
  {name: 'simple-icons:javascript'},
  {name: 'simple-icons:typescript'},
  {name: 'simple-icons:php'},
  {name: 'simple-icons:symfony'},
  {name: 'simple-icons:supabase'},
  {name: 'simple-icons:express'},
  {name: 'logos:pinia'},
  {name: 'simple-icons:postgresql'},
]);

const project = ref<project | undefined>(undefined);

$fetch('/api/project/getProject').then((res) => {
  if (Array.isArray(res) && res.length > 0) {
    project.value = res;
  } else {
    project.value = undefined;
  }
});

let submitForm = () => {
  if (name.value && email.value && message.value && token.value) {
    $fetch('/api/contact/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
        token: token.value
      })
    }).then((res) => {
      console.log(res);
      alert.value.message = "Message sent successfully";
    }).catch(() => {
      alert.value.message = "An error occurred, please try again";
    });
  } else {
    alert.value.message = "An error occurred, please try again";
  }
}

let slideTo = (id : string) => {
  document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
}
</script>

<template>
  <div class="flex flex-col justify-end gap-6 text-grey-primary max-w-3xl">
    <div class="font-Libre lg:text-4xl md:text-3xl text-2xl"><h1>Hello, i'm corentin</h1>
      <p>french full-stack developper</p>
      <p>based in <span class="italic">Paris</span>/<span class="italic">Troyes</span></p>
    </div>

    <p class="font-DM max-w-2xl text-sm sm:text-base">I'm a full-stack developper with a strong focus on the front-end. I'm passionate about
      creating beautiful and functional websites and applications.</p>

    <div class="flex gap-2 flex-wrap max-sm:items-center">
      <buttons @click="slideTo('contact')" type="button-primary">Talk with me</buttons>
      <buttons @click="slideTo('project')" type="button-border">See my projects</buttons>
    </div>
  </div>


  <div class="mt-32 text-grey-primary">
    <h2 class="font-Libre text-3xl text-grey-primary mb-10" id="project">My projects</h2>

    <project-list v-for="(p,i) in project" :title="p.title" :number="parseInt(i+1)" :slug="p.slug" :key="p.id" v-if="project"/>

  </div>

  <div class="mt-32 flex flex-col">
    <h2 class="font-Libre text-3xl text-grey-primary">My favorite tools</h2>
    <div class="border-grey-primary border-solid border w-full mt-5 mb-10"/>
    <Splide class="mt-10" :extensions="extensions"
            :options="{ rewind: true, pagination: false, arrows: false, type: 'loop', perPage: 6, breakpoints: { 576: { perPage: 1.5 }, 768: { perPage: 3 }, 1024: { perPage: 4 } } }"
            aria-label="My Favorite Images">
      <SplideSlide class="flex justify-center" v-for="i in icons" :key="i.name">
        <icon :name="i.name" class="w-20 h-20 text-grey-primary"/>
      </SplideSlide>
    </Splide>
  </div>

  <div class="my-32">
    <h2 class="font-Libre text-3xl text-grey-primary">Get in touch</h2>
    <div class="border-grey-primary border-solid border w-full mt-5 mb-10"/>
    <div class="mt-10">

        <div class="col-span-12" id="contact">
          <div class="flex justify-center items-center gap-5 mt-10">
            <form class="max-w-4xl w-full flex flex-col sm:grid grid-cols-6 sm:px-4 gap-4" @submit.prevent="submitForm">
              <div class="col-span-6" v-if="alert.message" :class="alert.error ? 'sucess' : 'error'">{{ alert.message }}</div>
              <div class="col-span-3 flex flex-col gap-4"><label for="name" class="text-grey-primary">Name</label><input type="text" placeholder="Name" v-model="name" class="bg-transparent border border-solid border-grey-primary p-4 focus:outline-0 rounded"></div>
              <div class="col-span-3 flex flex-col gap-4"><label for="email" class="text-grey-primary">Email</label><input type="email" placeholder="Email" v-model="email" class="bg-transparent border border-solid border-grey-primary p-4 focus:outline-0 rounded"></div>
              <div class="col-span-6 flex flex-col gap-4"><label for="message" class="text-grey-primary">Message</label><textarea placeholder="Message" v-model="message" class="bg-transparent resize-none border border-solid border-grey-primary p-4 focus:outline-0 h-40 rounded"></textarea></div>
              <NuxtTurnstile class="col-span-6" v-model="token" />
              <div class="col-span-6 flex justify-end"><buttons type="button-normal" @click="submitForm">Send</buttons></div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>