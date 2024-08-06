<script setup lang="ts">
import Language from "~/components/language.vue";

const route = useRoute();
const router = useRouter();
const projectSlug = route.params.projectSlug;

const {data: project, error: err} = await useFetch<project>(`/api/project/get/${projectSlug}`, {
  method: 'POST',
  body: {
    slug: projectSlug
  },
})

if (err.value) {
  console.log(err.value)
  router.push('/')
}

if(project.value) {
  console.log(project.value)

  useHead({
    title: 'Project – '+project.value.title,
    meta: [
      {
        name: 'description',
        content: project.value.desc
      }
    ]
  })

} else {
  router.push('/');
}

</script>

<template>
  <div v-if="project">
    <div class="flex flex-col gap-6"><h1 class="font-Libre lg:text-4xl md:text-3xl text-2xl">{{ project.title }}</h1>
      <p class="font-DM text-sm sm:text-base">{{ project.desc }}</p>
      <div class="flex gap-2 flex-wrap max-sm:items-center">
        <buttons type="button-primary" :to="project.url">Visit website</buttons>
        <buttons type="button-border" :to="project.github" v-if="project.github">Github</buttons>
      </div>
    </div>


    <div class="mt-10"><h2 class="font-Libre lg:text-4xl md:text-3xl text-2xl">Gallery</h2>
      <div class="border-grey-primary border-solid border w-full mt-5 mb-10"/>

      <div class="grid grid-cols-12 gap-2" id="gallery">
        <div class="col-span-12 md:col-span-6 xl:col-span-4 pic" v-for="(i, key) in project.ProjectImage" :key="key">
          <NuxtImg :src="i.url" class="w-full h-full rounded-lg"/>
        </div>
      </div>
      </div>
    </div>

    <div class="my-10"><h2 class="font-Libre lg:text-4xl md:text-3xl text-2xl">Tools</h2>
      <div class="border-grey-primary border-solid border w-full mt-5 mb-10"/>
      <div class="grid grid-cols-12 gap-3">
        <language v-for="p in project.devLanguages" :lang="p.devLanguage"
                  class="col-span-12 sm:col-span-6 md:col-span-3 rounded-lg duration-300 bg-[#f8f9fb] hover:bg-[#f3f3fb] border border-solid border-transparent hover:border-[#cac9ff]"/>
      </div>
    </div>
</template>

<style scoped>

</style>