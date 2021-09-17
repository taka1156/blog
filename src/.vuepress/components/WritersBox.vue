<template>
  <div>
    <div v-for="(writer, i) in writers" :key="i" class="writers-box">
      <h2>{{ writer.writerName }}</h2>
      <div class="profile-box">
        <img
          :src="$withBase(writer.imgIcon)"
          alt="プロフィール画像"
          class="profile-box__img"
        />
        <div class="sns-icons">
          <a :href="writer.github" class="sns-icons__icon">
           <i class="fab fa-github"></i>
          </a>
          <a :href="writer.twitter" class="sns-icons__icon">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div claass="github-status" v-if="writer.writerName !== 'coming soon...' && writer.isStatus">
        <img
          :src="
            `https://github-readme-stats.vercel.app/api/top-langs/?username=${writer.writerName}&layout=compact&theme=default&bg_color=white&hide_border=true`
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { WRITERS } from '../../constants/index.js';

  export default {
    name: 'WritersBox',
    data() {
      return {
        writers: WRITERS,
      };
    },
  };
</script>

<style scoped>
  .profile-box {
    display: flex;
    justify-content: center;
    width: 95%;
    height: 150px;
    padding: 0;
    margin: 0 auto;
    margin-left: 0;
    border: 0.5px solid gray;
    border-radius: 5px;
  }

  .profile-box__img {
    display: block;
    width: 30%;
    height: 80%;
    padding: 0;
    margin: auto;
  }

  .sns-icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 65%;
    padding: 10px auto;
    border-left: 1px solid gray;
  }

  .fab {
    font-size: 50px;
  }

  .sns-icons__icon {
    height: 50px;
    width: 50px;
  }

  .github-status {
    width: 90%;
    height: 150px;
  }

  @media screen and (min-width: 768px) {
    .profile-box {
      width: 60%;
    }
    .profile-box__img {
      width: 30%;
    }
  }
</style>
