<script setup lang="ts">
  import { defineProps } from 'vue';
 const props = defineProps({
  totalItems : {
      type : Number,
      default: 1000
    },
    itemsPerPage : {
        type : Number,
      default: 25
    },
    maxPagesShow :{
        type : Number,
      default: 5
    },
    pageIndex: {
      type:Number,
      default:1
    }

})
  import { ref } from "vue";
  const emit = defineEmits<{
  (e: 'pageNumberListner', id: number): void
}>()
  const onClickHandler = (page: number) => {
    emit('pageNumberListner', page);
  };

  const currentPage = ref(props.pageIndex);
</script>

<template>
  <vue-awesome-paginate
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
    :max-pages-shown="maxPagesShow"
    v-model="currentPage"
    :on-click="onClickHandler"
  />
</template>

<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>