<template>
   <div   class="menu-item">
          <img
            class="menu-item__image"
            :src="source"
            :alt="alt"
          />
          <div>
            <h3>{{ name }}</h3>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <div>
              <label for="add-item-quantity"
                >Quantity: {{ quantity }}</label
              >
              <input
                v-model.number="quantity"
                id="add-item-quantity"
                type="number"
              />
              <button @click="addToCart(quantity)">
                Add to Shopping Cart
              </button>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['source', 'alt', 'name', 'inStock', 'quantity', 'addToCart']
}
</script>

<style>


</style>