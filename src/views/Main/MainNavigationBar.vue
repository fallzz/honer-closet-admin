<template>
  <div id="card-container">
    <div v-for="card in getCards" v-bind:key="card.index">
        <router-link :to="card.route" class="cards">
            <i v-bind:class="card.icon" class="card-icon"></i>
            <div class="card-define">
                <p class="card-title">{{ card.title }}</p>
                <p class="card-data">{{ card.data }} {{ card.dataFormat }}</p>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCards']),
    ...mapGetters(['getProductProgressing']),
    ...mapGetters(['getReview']),
    ...mapGetters(['getBoard']),
  }
}
</script>

<style>
#card-container {
  display: flex;
}

.cards {
  width: 240px;
  margin: 12px;
  cursor:pointer;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 6px;
  color:black;
  text-decoration: none;
}

.cards:hover {
  background-color: #f5f5f5;
}

.cards:hover > .card-define {
  text-decoration-line: underline;
}

.card-icon {
  margin: auto;
  margin-right: 50px;
  padding: 10px;
}

.card-define {
  margin: auto;
  float: left;
  font-size: 15px;
}

</style>