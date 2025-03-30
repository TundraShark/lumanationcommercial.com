<template>
  <div class="component-big-info">
    <div class="mission-statement-container desktop">
        <div class="left title">{{ data.title }}</div>
        <div class="divider" />
        <div class="right">
          <div class="card">
            <template v-for="(obj, i) of data.text" :key="i">
              <div class="line">{{ obj }}</div>
            </template>
          </div>
        </div>
      </div>

      <div class="mission-statement-container mobile">
        <div class="top title">{{ data.title }}</div>
        <div class="divider" />
        <div class="bot">
          <div class="card">
            <template v-for="(obj, i) of data.text" :key="i">
              <div class="line">{{ obj }}</div>
            </template>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from "vue";

  interface Data {
    title: String
    text: String[]
  }

  const props = defineProps({
    data: {
      type: Object as PropType<Data>,
      required: true
    }
  });
</script>

<style scoped lang="scss">
// 1. Primary Colors:
$--primary-1: #4b4b4b;
$--primary-2: #2c2c2c;
$--primary-3: #1c2a3e;

// 2. Accent Colors:
$--accent-1: #253472;
$--accent-2: #ffc300;
$--accent-3: #2ecc71;

// 3. Neutral Colors:
$--neutral-1: hsl(0, 0%, 90%);
$--neutral-2: hsl(0, 0%, 95%);

.component-big-info {
  .mission-statement-container {
    display: flex;
    width: 100%;
    height: 100%;

    &.desktop {
      > .left {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        min-width: calc(50% - 18px);
        max-width: calc(50% - 18px);
      }

      > .right {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-width: calc(50% - 18px);
        max-width: calc(50% - 18px);
      }

      > .divider {
        display: flex;
        min-width: 4px;
        max-width: 4px;
        min-height: 90%;
        margin: 8px 8px;
        background-color: $--accent-3;
        filter: drop-shadow(0px 0px 2px hsl(145.44deg 63.2% 59.02%));
      }
    }

    &.mobile {
      flex-direction: column;

      > .top {
        margin-left: 16px;
      }

      > .divider {
        display: flex;
        min-width: calc(100% - 16px);
        max-width: calc(100% - 16px);
        min-height: 4px;
        max-height: 4px;
        margin: 8px 8px;
        background-color: $--accent-3;
        filter: drop-shadow(0px 0px 2px hsl(145.44deg 63.2% 59.02%));
      }
    }

    .card {
      margin: 16px;
      padding: 8px;
      border-radius: 16px;
      font-size: 1.2rem;
      font-family: "RobotoFlex";
      line-height: 1.4;
      color: #E0E0E0;
      text-align: left;

      > .line {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    }

    .title {
      font-size: 5rem;
      font-family: "Oswald";
      letter-spacing: 4px;
      color: $--accent-3;
      filter: drop-shadow(0px 0px 2px hsl(145.44deg 63.2% 59.02%));
    }
  }
}

@media only screen and (min-width: 700px) {
  .mission-statement-container.desktop { display: flex; }
  .mission-statement-container.mobile  { display: none; }
}

@media only screen and (max-width: 700px) {
  .mission-statement-container.desktop { display: none; }
  .mission-statement-container.mobile  { display: flex; }
}
</style>
