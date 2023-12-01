<script setup lang="ts">
import { ref } from "vue";

const title = ref("");
const author = ref("");
const date = ref(new Date());
const imgs = ref<string[]>([]);

const params = new URL(window.location.href).searchParams;
const src = ref(params.get("src"));

/**
 * 加载是否已结束。
 */
const isDone = ref(false);

/**
 * 资源是否已就绪。
 */
function isResourceDone() {
  return (
    title.value.length > 0 && author.value.length > 0 && imgs.value.length > 0
  );
}

if (src.value)
  fetch(src.value).then((resp) =>
    resp.json().then((data) => {
      title.value = data.title;
      document.title = `${data.title} | Manga Reader`;
      author.value = data.author;
      date.value = new Date(data.date);
      imgs.value = data.imgs;

      isDone.value = true;
    }),
  );
</script>

<template>
  <div v-if="isDone && isResourceDone()" id="reader">
    <h1>{{ title }}</h1>
    <p>{{ author }} | {{ date.toISOString().slice(0, 10) }}</p>
    <span v-for="(url, i) in imgs" :style="`--i: '${i + 1}';`">
      <img :src="url" alt="" />
    </span>
  </div>
  <div v-else-if="isDone && !isResourceDone()">
    <p>解析失败！</p>
  </div>
  <div v-else>
    <p v-if="!src">请在地址栏中设置 src 参数......</p>
    <p v-else>正在解析......</p>
  </div>
</template>

<style scoped>
p {
  margin: 1rem 0;
  color: #666;
}

span {
  position: relative;
  & img {
    width: 100%;
  }
  &::after {
    content: var(--i);
    position: absolute;
    bottom: 0.25rem;
    left: 0;
    width: 2rem;
    height: 1.5rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    line-height: 1.5rem;
  }
}
</style>
