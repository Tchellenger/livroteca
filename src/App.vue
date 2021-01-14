<template>
  <div>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">menu</i>
      </a>
      <ul>
        <li><a class="btn-floating red " v-on:click="component = 'form-book-reg'"><i class="material-icons">add</i></a></li>
        <li><a class="btn-floating yellow darken-1" v-on:click="component = 'search-book'"><i class="material-icons">search</i></a></li>
      </ul>
    </div>

    <component :is="component"></component>
  </div>

</template>


<script>

import M from 'materialize-css'
import BookReg from './components/formBookRegister.vue'
import SearchBook from './components/searchBook.vue'

export default {
  mounted () {
    M.AutoInit()
  },
  components: {
    'form-book-reg': BookReg,
    'search-book': SearchBook
  },
  data () {
    return {
      component: 'search-book'
    }
  },
}

</script>
