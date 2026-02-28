<script setup lang="ts">
import RainbowText from './RainbowText.vue';

const socials = [
  { name: 'codepen',    href: 'https://codepen.io/SRichardson',           label: 'CodePen',    color: '#beb8c8' },
  { name: 'deviantart', href: 'https://www.deviantart.com/vizune',         label: 'DeviantArt', color: '#bfe0ee' },
  { name: 'discord',    href: 'https://discordapp.com/users/vizune.',      label: 'Discord',    color: '#f3b28e' },
  { name: 'github',     href: 'https://github.com/vizune',                 label: 'GitHub',     color: '#c6f0c7' },
  { name: 'instagram',  href: 'https://www.instagram.com/vizune_/',        label: 'Instagram',  color: '#fffba3' },
  { name: 'linkedin',   href: 'https://www.linkedin.com/in/sasha-r-547a2b57', label: 'LinkedIn', color: '#cbb8c8' },
  { name: 'pinterest',  href: 'https://uk.pinterest.com/vizune/',          label: 'Pinterest',  color: '#bfe0ee' },
  { name: 'spotify',    href: 'https://open.spotify.com/user/1149827575',  label: 'Spotify',    color: '#f3b28e' },
  { name: 'steam',      href: 'https://steamcommunity.com/id/vizune/',     label: 'Steam',      color: '#c6f0c7' },
  { name: 'threads',    href: 'https://www.threads.net/@vizune_',          label: 'Threads',    color: '#fffba3' }
];
const year = new Date().getFullYear();
</script>

<template>
  <footer class="w-full p-6 bg-black text-center">
    <ul class="flex flex-wrap items-center justify-center gap-4 mt-2">
      <li v-for="s in socials" :key="s.name">
        <a
          :href="s.href"
          :title="s.label"
          target="_blank" rel="noopener noreferrer"
          :style="{ '--chip': s.color }"
          class="group inline-flex size-10 items-center justify-center rounded-full
                 bg-[var(--chip)] text-black
                 ring-2 ring-black shadow-[0_6px_20px_rgba(0,0,0,0.35),_inset_0_1px_0_rgba(255,255,255,0.06)]
                 transition-[background,color,box-shadow,ring-color] duration-200
                 hover:bg-black hover:text-[var(--chip)] hover:ring-[var(--chip)]/40
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--chip)]/60">
          <Icon :name="s.name" :size="22" aria-hidden="true" />
        </a>
      </li>
    </ul>
    <p class="text-sm mb-4 mt-6">
      <RainbowText text="Featuring Kuroshio, Suzuya, Akagi, Fubuki and Kasumi from Kantai Collection" />
    </p>
    <p class="mb-4">
      <a href="https://www.pixiv.net/en/users/147202" target="_blank" class="text-sm border py-1 px-2"><RainbowText text="Artwork by Koji" /></a>
    </p>
    <p class="mt-4 text-lg text-white/60">
      <RainbowText :text="`© ${year} VIZUNE`" />
    </p>
  </footer>
</template>
