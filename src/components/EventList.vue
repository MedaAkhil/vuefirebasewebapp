<template>
  <div>
    <h1>-Club Events-</h1>
    <ul>
      <li v-for="event in events" :key="event.id">
        <!-- {{ event.name }}<br> -->
        <!-- {{ event.date }}<br /> -->
        {{ event.desc }}<br />
        <a href="{{ event.link }}">Register</a>
        <section style="background-color: #fff" class="events-posts">
          <div class="card-div" data-aos="zoom-in-up">
            <article class="blog-post">
              <div class="blog-post__img">
                <img src="static/assets/github.jpeg" alt="" />
              </div>
              <div class="blog-post__info">
                <div class="blog-post_date">
                  <span>Tuesday</span>
                  <span>{{ event.date }}<br /></span>
                </div>
                <h2 class="blog-post_title">{{ event.name }}</h2>
                <p>{{ event.desc }}</p>
              </div>
              <a href="{{event.link}}" class="blog-post____cta">Event Ended</a>
            </article>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import { firestore } from "@/firebase";

export default {
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    fetchEvents() {
      firestore.collection("Events").onSnapshot((snapshot) => {
        this.events = snapshot.docs.map((doc) => doc.data());
      });
    },
  },
};
</script>
<!-- 
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

body {
  background-repeat: no-repeat;
  background-size: 210vh 75%;
  background-position: top center;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #fff;
  font-size: 1.6rem;
}

a:hover {
  color: orange;
}

section #hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}

#hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.img-1 {
  box-sizing: border-box;
  width: 90%;
  background-size: contain;
  aspect-ratio: 1;
  background-repeat: no-repeat;
}

.img-1-text {
  color: #088178;
  font-size: 3vh;
  box-sizing: border-box;
  margin: 10% 0 0 4%;
  text-align: left;
  width: 90%;
}

.img-2 {
  box-sizing: border-box;
  width: 100%;
  background-size: contain;
  aspect-ratio: 1;
  background-repeat: no-repeat;
}

.img-2-text {
  color: #088178;
  font-size: 3vh;
  box-sizing: border-box;
  text-align: left;
  width: 90%;
}

.grand_parent-goal {
  width: 100%;
  height: fit-content;
  background: #dfe6e9;
  color: #fff;
  padding: 10% 0 10% 0;
}

.eventsintroduction p {
  text-align: center;

}

@media (max-width: 800px) {
  .eventsintroduction div p {
    text-align: center;
  }

  .eventsintroduction h1 {
    font-size: 3.0rem;
  }

  .eventsintroduction div p {
    font-size: 15px;
  }
}


h1 {
  font-size: 4rem;
  padding: 20px 0;
  text-align: center;
  color: #000;
}

.child-goal p {
  margin-top: 10%;
  text-align: center;
}

.parents-goal {
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition: all 0.1 linear;
}

.child-goal {
  height: fit-content;
  flex: 1 1 200px;
}

@media (max-width: 768px) {
  .grand_parent-goal {
    height: auto;
  }

  h1 {
    font-size: 20rem;
  }
}

.grand_parent {
  width: 100%;
  height: fit-content;
  background: #dfe6e9;
  color: #fff;
  padding: 10% 0 10% 0;
}

h1 {
  font-size: 4rem;
  padding: 20px 0;
  text-align: center;
  color: #000;
}

.child p {
  margin-top: 10%;
  text-align: center;
}

.parents {
  width: 90vw;
  height: auto;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition: all 0.1 linear;
}

.child {
  height: fit-content;
  padding: 3%;
  background: rgba(42, 45, 54, 0.9);
  box-shadow: 0 0 20px #bac3c3;
  flex: 1 1 200px;
  margin: 20px;
  box-shadow: 1px 1px 1px 1px black;
  border-radius: 5%;
}

.child:first-child {
  background: rgba(42, 45, 54, 0.9);
}

.child:last-child {
  background: rgba(42, 45, 54, 0.9);
}

@media (max-width: 768px) {
  .grand_parent {
    height: auto;
  }
}

.eventsintroduction {
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.eventsintroduction p {
  color: #fff;
  font-size: 1.9rem;
}

.eventsintroduction h1 {
  color: #fff;
}

@media (max-width: 992px) {
  #hero h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    /* margin-top: 60%; */
    /* width: 140%; */
    margin-left: 10px;
    text-align: center;
  }
}

@media (max-width: 576px) {
  /* .dropdown_menu{
        left: 2rem;
        width: unset;
    } */
}

.blog-post {
  display: flex;
  align-items: center;
  max-width: 900rem;
  background-color: #fff;
  padding: 2.5rem;
  box-shadow: 0 1.4rem 3rem rgba(0, 0, 0, 0.2);
  border-radius: 0.8rem;
}

.card-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 59px 0 0 0;
  padding: 0;
}

.blog-post_img {
  position: relative;
  min-width: 35rem;
  max-width: 35rem;
  height: -30rem;
  transform: translateX(-8rem);
}

.blog-post__img img {
  display: block;
  width: 250px;
  margin-left: -78px;
  object-fit: cover;
  height: 100%;
  border-radius: 0.8rem;
}

.blog-post_img::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  box-shadow: 0.5rem 0.5rem 3rem 1px rgba(0, 0, 0, 0.05);
  border-radius: 0.8rem;
  opacity: 0.5;
}

.blog-post____cta {
  box-sizing: border-box;
  margin: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  background: blue;
  color: white;
  text-decoration: none;
  border-radius: 10px 0 10px 0;
}

.blog-post_date span {
  display: block;
  margin: 0.5rem 0;
  color: #8e8c8c;
  font-weight: 600;

}

.blog-post_title {
  font-size: 2.5rem;
  margin: 1.5rem 0 2rem;
  /* text-transform: uppercase;  */
  color: #4facfe;
}

.blog-post__info p {
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 3rem;
}

.blog-post_cta {
  display: inline-block;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  letter-spacing: 1px;
  padding: 1.5rem 3rem;
  text-transform: uppercase;
  color: #fff;
  border-radius: 0.8rem;
}

.blog-post_cta:hover {
  background-image: linear-gradient(to right, #00f2fe 0%, #4facfe 100%);
}

@media (max-width: 1068px) {
  .blog-post {
    max-width: 80rem;
  }

  .blog-post_img {
    min-width: 30rem;
    max-width: 30rem;
  }
}

@media (max-width: 868px) {
  .blog-post {
    max-width: 70rem;
  }
}

@media (max-width: 768px) {
  .blog-post {
    padding: 2.5rem;
    flex-direction: column;
  }

  .blog-post_img {
    min-width: 100%;
    transform: translate(0, -8rem);
  }
}
</style>









 -->



