<template>
  <div id="app">
    <div id="header">
      <input class="noSelect" type="checkbox" id="toggler"/>
      <div id="burger-menu"><div></div></div>
      <div id="header-image"><img src="@/assets/LOGO/Logo.jpg"/></div>
      <div id="nav">
        <div class="links">
        <router-link class="router-link" to="/">What Is MACA?</router-link>
        <router-link class="router-link" to="/outreach">Manchester Vegan Outreach</router-link>
        <router-link class="router-link" to="/otherevents">Other Events</router-link>
        <router-link class="router-link" to="/latestnews">Latest News</router-link>
        <router-link class="router-link" to="/contact">Contact Us</router-link>
        </div>
      </div>
    </div>
    <router-view/>
      <Footer>
        <div>
          &copy; 2020 Manchester Animal Climate Action
        </div>
        <div>
          <a target="_blank" href="https://www.facebook.com/ManchesterAnimalAction/"><img src="@/assets/ICONS/facebook-icon.png"/></a>
          <a target="_blank" href="https://www.instagram.com/manc_animal_action/"><img src="@/assets/ICONS/instagram-icon.png"/></a>
        </div>
        <div>sayhi@maca.org</div>
      </Footer>
  </div>
</template>

<style lang="scss">

@import '@/assets/sass/base/_variables.scss';

@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #32373b;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

  a {
    color: #32373b;

    &:visited {
      color: #32373b;
    }

    &:hover {
      color: rgb(134, 134, 134);
    }

    &:focus {
      color: orange;
      outline: none;

      img {
        outline: 2px solid orange;
        outline-offset: -2px;
      }
    }
  }

  #header {
    z-index: 20;
    position: relative;
  }

  #header-image {
    width: 100%;
    height: 120px;
    background: white;

      img {
        margin-top: 5px;
        height: 100px;
      }
  }

  #nav {
    position: relative;
    margin-bottom: 2rem;
    padding: 10px 10px;
    color: rgb(231, 231, 231);
    background: $background-color;
    position: relative;
    opacity: 1;
    top: 0;
    transition: opacity 400ms ease-in;
    transition: top 600ms ease-in-out;
    z-index: -1;

    .links {
      margin: 0 auto;
      position: relative;

      .router-link {
        border-right: 2px solid white;

        &:last-child {
          border-right: none;
        }

        &.router-link-exact-active {
          color: white;
          box-shadow: 0px 7px $background-color, 0px 11px $highlight-color-b;
        }
      }
    }

  a {
    font-weight: bold;
    text-decoration: none;
    color: rgb(209, 209, 209);

    &:visited {
      color: rgb(209, 209, 209);
    }

    &:hover {
      color: white;
    }

    &:focus {
      color: orange;
      outline: none;
    }
  }
}

  #burger-menu {
  visibility: hidden;
  position: absolute;
  top: 30px;
  left: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 400ms ease-in-out;
  z-index: 11;

  div {
    width: 60%;
    height: 5px;
    background: $background-color;
    display: flex;
    flex-direction: column;
    z-index: -10;
    transition: background-color 400ms ease-out;

    &:before, &:after {
      content: '';
      position: absolute;
      width: 60%;
      height: 5px;
      background: $background-color;
    }

    &:before {
      top: 12px;
    }

    &:after {
      bottom: 12px;
      transition: background-color 400ms ease-out;
    }
  }
}

#toggler {
  position: absolute;
  top: 35px;
  left: 15px;
  width: 40px;
  height: 40px;
  opacity: 0;
  z-index: 12;
  cursor: pointer;

  &:checked {
    top: 133px;
    &~ #nav {
      opacity: 1;
      height: 210px;
      top: 0;
    }

  &~ #burger-menu {
    transform: rotate(135deg);
    top: 128px;
    z-index: 2;

    div {
      background-color: white;
    }

    div:before {
      opacity: 0;
    }

    div:after {
      transform: rotate(90deg);
      bottom: 22px;
      background-color: white;
    }
  }
  }
}

h2 {
  position: relative;
    padding: 0.5rem 3rem;
    margin-bottom: 2rem;
    line-height: 1.5rem;
    background-image: linear-gradient(to right, $highlight-color-b, $highlight-color-a, $highlight-color-b);
    color: white;

    &:before, &:after {
        content: '';
        background: none;
        box-shadow: 0 22px 15px 8px black;
        position: absolute;
        width: 35%;
        bottom: 33px;
        z-index: -2;
    }

    &:before {
        left: 18px;
        transform: rotate(-2deg);
    }

    &:after {
      right: 18px;
        transform: rotate(2deg);
    }
  }

  Footer {
    background: $background-color;
    color: white;
    padding: 1rem 0;
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      padding: 0 2rem;

      &:first-child {
        text-align: left;
        width: 40%;
      }

      &:last-child {
        text-align: right;
        width: 40%;
      }

      &:nth-child(2) {
        overflow: hidden;

        a {
          margin: 0 0.5rem;
        }
      }

      img {
        width: 3rem;
      }
    }
}

  .note-style {
    display: flex;

    .postit {
      transform: rotate(10deg);
      position: relative;
      z-index: 0;
      margin: 2rem 2rem 3rem;

      &:first-child {
        transform: rotate(-15deg);
      }

      ul {
        list-style: none;
        font-family: 'Shadows Into Light', cursive;
        font-size: 1.3rem;
        color: rgb(205, 217, 218);
        background-image: linear-gradient(to bottom right, $postit-color-a, $postit-color-b);
        padding: 2rem;
        min-width: 220px;
        min-height: 200px;
        text-align: left;

        li {
          margin-left: 0.5rem;
        }

        &:nth-child(2) {
          padding: 1rem 0 3rem;
        }

        &:before, &:after {
            content: '';
            background: none;
            box-shadow: 0 22px 15px 8px black;
            position: absolute;
            width: 35%;
            bottom: 33px;
            z-index: -2;
        }

        &:before {
            left: 18px;
            transform: rotate(-2deg);
        }

        &:after {
          right: 18px;
            transform: rotate(2deg);
        }

      }
    }
  }

  .router-link {
    padding: 0 10px;
    min-width: 120px;

    &:nth-child(2) {
      min-width: 240px;
    }

  }

  @media screen and (max-width: 800px) {

    #burger-menu {
      visibility: visible;

      div {
        background-color: $background-color;

        &:after {
          background-color: $background-color;
        }
      }
    }

    #nav {
      opacity: 0;
      height: 0;
      top: -250px;
      background: rgba($background-color, 0.95);

      .links {
        display: flex;
        flex-direction: column;
        align-items: center;

        .router-link {
          border-right: none;
          margin-bottom: 1rem;

          &.router-link-exact-active {
            box-shadow: none;
            position: relative;

            &:before, &:after {
              content: '';
              position: absolute;
              width: 0;
              height: 0;
              top: -2px;
            }

            &:before {
              left: -10px;
              border-left: 10px solid rgba(255,255,255,0.8);
              border-right: 10px solid rgba($background-color, 0);
              border-top: 10px solid rgba($background-color, 0);
              border-bottom: 10px solid rgba($background-color, 0);
            }

            &:after {
              right: -10px;
              border-right: 10px solid rgba(255,255,255,0.8);
              border-left: 10px solid rgba($background-color, 0);
              border-top: 10px solid rgba($background-color, 0);
              border-bottom: 10px solid rgba($background-color, 0);
            }

          }

          &:first-child {
            margin-top: 1rem;
          }
        }
      }
    }

    .links {
      max-width: 80%;
    }

    .note-style {

    .postit {

      &:first-child {
        margin-left: 2rem;
        width: 220px;
      }

      &:nth-child(2){
        margin-top: -4rem;
        margin-left: 8rem;
      }
    }
  }

    Footer {
      flex-direction: column;
      div {
        width: 95%;
        margin-bottom: 1rem;

        &:first-child {
          text-align: center;
          width: 100%;
        }

        &:last-child {
          text-align: center;
          margin-bottom: 0;
        }
      }
    }
  }

  .noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

</style>
