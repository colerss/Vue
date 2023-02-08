<script>
export default {
  name: "MenuItem",
  props: {
    addToShoppingCart: { type: Function },
    image: {
      type: Object,
      default: () => ({ source: "", alt: "" }),
    },
    inStock: { type: Boolean },
    name: { type: String, required: true },
    quantity: { type: Number },
  },
};
</script>

<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt" />
    <div>
      <h3>{{ name }}</h3>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <div>
        <label for="add-item-quantity">Quantity: {{ quantity }}</label>
        <input v-model.number="quantity" id="add-item-quantity" type="number" />
        <button @click="addToShoppingCart(quantity)">
          Add to Shopping Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
