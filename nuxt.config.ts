import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/robots",
        "@nuxt/image",
        "@nuxt/fonts",
        "nuxt-splide",
        "@nuxt/icon",
        "@nuxtjs/turnstile",
    ],
    runtimeConfig: {
        turnstile: {
            secretKey: process.env.TURNSTILE_SECRET_KEY,
        },
        smtp: {
            smtpHost: process.env.SMTP_HOST,
            smtpPort: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        },

    },
    nitro: {
        rollupConfig: {
            plugins: [vue()]
        },
    },
    turnstile: {
        siteKey: '0x4AAAAAAAgmai5JfWxjMVRI',
    },
    fonts: {
        families: [
            {name: 'DM Sans', provider: 'google'},
            {name: 'Libre Baskerville', provider: 'google'},
        ],
    },
    css: ['~/assets/css/tailwind.css'],
})