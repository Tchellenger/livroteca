<template>
  <div class="row">
    <form class="col s12">

      <div v-for="(item) in formFields" :key="item" class="row">
        <div class="input-field col s4 offset-s4">
          <input v-model="item.value" type="text" :id="item.displayText" name="name" class="validate" required pattern="[A-Za-zÀ-ú0-9\s]+$" minlength="2" maxlength="20">
          <label :for="item.displayText"><i class="tiny material-icons tooltipped yellow-text text-accent-4" data-position="bottom" data-tooltip="Campo Obrigatório!">announcement</i> Nome do {{item.displayText}}</label>
          <span class="helper-text" data-error="Preencha o campo." data-success=""></span>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s4 offset-s4">
          <a @click="saveBook" class="waves-effect waves-light btn">Cadastrar</a>
        </div>
      </div>

      <div class="row">
        <div class="col s4 offset-s4">
          <div v-for="book in books" :key="book.nome" class="collection">
            <a href="#!" class="collection-item">{{book.nome}}</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>

export default {
  data () {
    return {
      formFields:[
        {displayText:'Livro', value:''},
        {displayText:'Autor', value:''},
        {displayText:'Editora', value:''},
      ],
      books: []
    }
  },
  methods: {
    saveBook() {
      this.books.push({nome:this.formFields[0].value, author: this.formFields[1].value, publisher: this.formFields[2].value})
    }
  }

}
</script>
