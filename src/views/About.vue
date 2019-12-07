<template>
  <div class="about">
    <h1>헬로</h1>
    <div id="nav">
      <router-link to="/test">
        <button>test</button>
      </router-link>
    </div>

    <button>test</button>

    <table>
      <tr v-for="index in age" v-bind:key="index">
        <!--         
        <td>{{ index }}</td>

        <td>
          <button @click="test_click(index)">{{ index }}</button>
        </td>-->

        <td>
          <button ref="a1" @click="test_click()">버튼</button>
          <button @click="test_change(a1)">변경</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      name: "이름",
      list: [0, 1, 2, 3, 4, 5],
      args: [],
      age: 8

      // list: function() {
      //   var list = [];
      //   for (var i = 1; (i = this.age); i += 2) {
      //     list.push(i);
      //     return list;
      //   }
      // }
    };
  },
  methods: {
    test_click() {
      console.log(this.$refs.a1);
      this.$refs.a1.innerText = "가가가";
    },
    test_change(name) {
      alert(name);
      this.name = "1";
    }
  }
};
</script>

<style>
</style>
