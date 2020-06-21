<template>
  <div class="wrapper-player">
    <div
      class="player-panel"
      :class="{
    active: activePlayer == 0 && !this.isWinner,
    winner: activePlayer == 0 && this.isWinner}"
    >
      <div class="player-name">{{getNamePlayer(0)}}</div>
      <div class="player-score">{{scoresPlayer[0]}}</div>
      <div class="player-current-box">
        <div class="player-current-label">Current</div>
        <div class="player-current-score">{{activePlayer == 0 ? currentPlayer : 0}}</div>
      </div>
    </div>

    <div
      class="player-panel"
      :class="{ 
        active: activePlayer == 1 && !this.isWinner,
    winner: activePlayer == 1 && this.isWinner}"
    >
      <div class="player-name">{{getNamePlayer(1)}}</div>
      <div class="player-score">{{scoresPlayer[1]}}</div>
      <div class="player-current-box">
        <div class="player-current-label">Current</div>
        <div class="player-current-score">{{activePlayer == 1 ? currentPlayer : 0}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "players",
  props: {
    scoresPlayer: {
      type: Array,
      default: [0, 0]
    },
    activePlayer: {
      type: Number,
      default: 0
    },
    currentPlayer: {
      type: Number,
      default: 0
    },
    isWinner: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    getNamePlayer(index) {
      let defaultName = "Player " + (index + 1);
      if (this.activePlayer == index && this.isWinner) {
        defaultName = "Winner!";
      }
      return defaultName;
    }
  }
};
</script>

<style>
</style>