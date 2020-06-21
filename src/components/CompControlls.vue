<template>
  <div>
    <button class="control btn-new" v-on:click="newGame">
      <i class="ion-ios-plus-outline"></i>New game
    </button>
    <button v-on:click="rollDice" class="control btn-roll">
      <i class="ion-ios-loop"></i>Roll dice
    </button>
    <button v-on:click="getPoints" class="control btn-hold">
      <i class="ion-ios-download-outline"></i>Hold
    </button>

    <input
      :disabled="isPlaying"
      v-bind:value="finalScores"
      v-on:input="$emit('handlefinalScores',$event)"
      type="number"
      placeholder="Final score"
      class="final-score"
    />
  </div>
</template>

<script>
export default {
  name: "controlls",
  data() {
    return {};
  },
  props: {
    finalScores: {
      type: [Number, String],
      default: 100
    },
    isPlaying: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    newGame() {
      this.$emit("handleNewGame");
    },
    rollDice() {
      this.$emit("handleRollDice");
    },
    getPoints() {
      this.$emit("getPoints");
    }
  }
};
</script>

<style>
</style>