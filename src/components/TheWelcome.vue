<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Documentation Section -->
      <div class="col-md-4 mb-4">
        <WelcomeItem>
          <template #icon>
            <DocumentationIcon />
          </template>
          <template #heading>Documentation</template>
          <p>
            Vue’s
            <a href="https://vuejs.org/" target="_blank" rel="noopener" class="text-decoration-none">
              official documentation
            </a>
            provides you with all information you need to get started.
          </p>
        </WelcomeItem>
      </div>

      <!-- Tooling Section -->
      <div class="col-md-4 mb-4">
        <WelcomeItem>
          <template #icon>
            <ToolingIcon />
          </template>
          <template #heading>Tooling</template>
          <p>
            This project is served and bundled with
            <a href="https://vite.dev/guide/features.html" target="_blank" rel="noopener" class="text-decoration-none">Vite</a>. The
            recommended IDE setup is
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener" class="text-decoration-none">VSCode</a>
            +
            <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener" class="text-decoration-none">Volar</a>. If
            you need to test your components and web pages, check out
            <a href="https://vitest.dev/" target="_blank" rel="noopener" class="text-decoration-none">Vitest</a>
            and
            <a href="https://www.cypress.io/" target="_blank" rel="noopener" class="text-decoration-none">Cypress</a> /
            <a href="https://playwright.dev/" target="_blank" rel="noopener" class="text-decoration-none">Playwright</a>.
          </p>
          <br />
          More instructions are available in
          <a href="javascript:void(0)" @click="openReadmeInEditor" class="text-decoration-none"><code>README.md</code></a>.
        </WelcomeItem>
      </div>

      <!-- Ecosystem Section -->
      <div class="col-md-4 mb-4">
        <WelcomeItem>
          <template #icon>
            <EcosystemIcon />
          </template>
          <template #heading>Ecosystem</template>
          <p>
            Get official tools and libraries for your project:
            <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener" class="text-decoration-none">Pinia</a>,
            <a href="https://router.vuejs.org/" target="_blank" rel="noopener" class="text-decoration-none">Vue Router</a>,
            <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener" class="text-decoration-none">Vue Test Utils</a>, and
            <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener" class="text-decoration-none">Vue Dev Tools</a>. If
            you need more resources, we suggest paying
            <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" class="text-decoration-none">Awesome Vue</a>
            a visit.
          </p>
        </WelcomeItem>
      </div>
    </div>

    <div class="row">
      <!-- Community Section -->
      <div class="col-md-4 mb-4">
        <WelcomeItem>
          <template #icon>
            <CommunityIcon />
          </template>
          <template #heading>Community</template>
          <p>
            Got stuck? Ask your question on
            <a href="https://chat.vuejs.org" target="_blank" rel="noopener" class="text-decoration-none">Vue Land</a>
            (our official Discord server), or
            <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener" class="text-decoration-none">StackOverflow</a>.
            You should also follow the official
            <a href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener" class="text-decoration-none">@vuejs.org</a>
            Bluesky account or the
            <a href="https://x.com/vuejs" target="_blank" rel="noopener" class="text-decoration-none">@vuejs</a>
            X account for latest news in the Vue world.
          </p>
        </WelcomeItem>
      </div>

      <!-- Support Vue Section -->
      <div class="col-md-4 mb-4">
        <WelcomeItem>
          <template #icon>
            <SupportIcon />
          </template>
          <template #heading>Support Vue</template>
          <p>
            As an independent project, Vue relies on community backing for its sustainability. You can help
            us by
            <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener" class="text-decoration-none">becoming a sponsor</a>.
          </p>
        </WelcomeItem>
      </div>
    </div>
  </div>
</template>
