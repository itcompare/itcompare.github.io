<template>
  <div class="home">
    <div class="hero">
<!--      <ModuleTransition delay="0.32">-->
<!--        <Notice/>-->
<!--      </ModuleTransition>-->
      <ModuleTransition>
        <el-row style="min-height: 30rem;top:1rem;">
            <img
                v-if="recoShowModule && $frontmatter.heroImage"
                style="width:80%;height: 30rem;object-fit:cover;"
                :src="$withBase($frontmatter.heroImage)"
                alt="hero">
        </el-row>
      </ModuleTransition>
      <ModuleTransition>
        <el-row>
          <el-col>
            <h1
                v-if="recoShowModule && $frontmatter.heroText !== null"
                :style="{ marginTop: '140px',color: '#fff'}"
            >
              {{ $frontmatter.heroText }}
            </h1>
            <p class="action" v-if="recoShowModule && $frontmatter.actionText && $frontmatter.actionLink">
              <NavLink class="action-button" :item="actionLink"/>
            </p>
          </el-col>
        </el-row>
      </ModuleTransition>
    </div>

    <ModuleTransition delay="0.24">
      <el-card class="box-card">
        <div class="features" v-if="recoShowModule && $frontmatter.features && $frontmatter.features.length">
          <div v-for="(feature, index) in $frontmatter.features" :key="index" class="feature">
            <h2>{{ feature.title }}</h2>
            <ul>
              <li v-for="detail in feature.details" :key="detail">
                <p>{{ detail }}</p>
              </li>
            </ul>
          </div>
        </div>
      </el-card>
    </ModuleTransition>

    <ModuleTransition delay="0.32">
      <Content class="home-center" v-show="recoShowModule" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import { defineComponent, computed, getCurrentInstance } from 'vue-demi'
import NavLink from '@theme/components/NavLink'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
import Notice from "./Notice";

export default defineComponent({
  components: {Notice, NavLink, ModuleTransition },

  setup (props, ctx) {
    const instance = getCurrentInstance().proxy
    const recoShowModule = computed(() => instance && instance.$parent.recoShowModule)
    const actionLink = computed(() => instance && {
      link: instance.$frontmatter.actionLink,
      text: instance.$frontmatter.actionText
    })
    const heroImageStyle = computed(() => instance.$frontmatter.heroImageStyle || {
      maxHeight: '200px',
      margin: '6rem auto 1.5rem'
    })

    return { recoShowModule, actionLink, heroImageStyle }
  }
})
</script>

<style lang="stylus">
.home {
  padding: $navbarHeight 0 0 0;
  //max-width: 960px;
  margin: 0px auto;

  .hero {
    text-align: center;
    h1 {
      display: block;
      font-size: 2.5rem;
      color: var(--text-color);
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      font-size: 1.6rem;
      line-height: 1.3;
      color: var(--text-color);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.2rem 1.2rem;
      border-radius: $borderRadius
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      load-start()

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid var(--border-color);
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: center;
  }

  .feature {
    box-shadow: 10px 10px 5px #888888;
    border: 1px solid gainsboro;
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    transition: all .5s
    color: var(--text-color);
    margin-right 4rem;
    margin-top: 2rem;
    background-color: bisque;
    padding: 1rem;
    h2 {
      font-size: 1.6rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
    }

    &:hover {
      transform scale(1.05)
    }
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
