<template>
<div>
  <div class="row">
    <div class="col s4 offset-s4">
      <div class="input-field col s12">
        <input id="search" v-model="search" type="text">
        <label for="search">Buscar livro pelo nome</label>
      </div>
    </div>
  </div>
  <div class="row">    
    <div class="collection col s4 offset-s4">
      <a v-for="( book, index ) in filteredBooks" :key="index" class="collection-item" href="#">
        {{book.name}}
        <span class="new badge" :class="[{ green: book.available}, {red: !book.available} ]"  data-badge-caption="">{{book.date}}</span>
      </a>
    </div>
  </div>
</div>
</template>



<script>

export default {
  data(){
    return {
      books: [
        {name: 'Ana Terra', available: true, date: '07-10-2021'},
        {name: 'O Senhor dos Anéis', available: false, date: '07-10-2021'},
        {name: 'Pense e Enriqueça', available: true, date: '07-10-2021'},
        {name: 'Pai pobre, pai rico', available: false, date: '07-10-2021'}

      ],
      search:''
    }
  },
  computed: {
    filteredBooks: function() {
      return this.books.filter((book) => {
        var regexp= new RegExp(this.search, "i");
        return book.name.match(regexp)
      });
    }
  }
  
}

</script>
