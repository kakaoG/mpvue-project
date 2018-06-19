<template>
  <div class="counter-warp">
    <p>Vuex counter: {{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>

</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('counter', {
        count: state => state.num
      }),
    },
    methods: {
      ...mapActions('counter', ['add', 'reduce']),
      increment() {
        this.add(1);
      },
      decrement() {
        this.reduce(-1);
      },
      goBack() {
        wx.navigateBack();
      }
    }
  };
</script>

<style>
  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }

  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>
