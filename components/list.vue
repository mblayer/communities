
<template>
  <section>
    <ul class="grid">
      <li
        v-for="event in events"
        :key="event.id"
      >
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{ event.Nombre }}
            </p>
            <a
              href="#"
              class="card-header-icon"
              aria-label="more options">
              <span class="icon">
                <i
                  class="fas fa-angle-down"
                  aria-hidden="true"/>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              {{ event.Tipo }}
            </div>
          </div>
          <footer class="card-footer">
            <a
              v-if="event.Contacto.length"
              :href="`mailto:${event.Contacto}`"
              class="card-footer-item"><i class="icon ion-md-mail"/></a>
            <a
              v-if="event.Twitter.length"
              :href="`https://twitter.com/${event.Twitter}`"
              class="card-footer-item"><i class="icon ion-logo-twitter"/></a>
            <a
              v-if="event.Grupo.length"
              :href="event.Grupo"
              class="card-footer-item"
              target="_blank"><i class="icon ion-md-link"/></a>
          </footer>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import { db } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      events: []
    }
  },
  mounted() {
    db.ref('result')
      .once('value')
      .then(snapshot => {
        this.events = snapshot.val()
      })
  }
}
</script>
<style lang="scss">
.grid {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-content: center;
  padding: 0;
  li {
    list-style: none;
  }
}
.card {
  border: 2px solid rgba(125, 125, 125, 0.9);
  padding: 8px;
  height: 150px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-lightBlack);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px 0px;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  .card-header-title {
    font-weight: bold;
    text-align: center;
  }
  .card-footer {
    display: flex;
    font-size: 20px;
    justify-content: flex-end;
    i {
      color: black;
      margin: 0 20%;
    }
  }
}
</style>
