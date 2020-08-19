<template>
  <div class="container">

    <div class="section-centered">
      <div>
      <h2>What is Manchester Animal Climate Action?</h2>
      </div>
      <div class="float-image">
        <p class="text-content">
          <strong>Manchester Animal Climate Action</strong> (aka MACA) is a vegan activism organisation in Manchester, UK, aiming to inspire and empower people to be vegan activists and work together to change society's attitude towards the animals it currently oppresses.
        </p>
        <div id="about-image"></div>
      </div>
    </div>
    <div class='section-centered'>
        <h2>Our Values</h2>
        <p class="focal-content">
            Animal Action has an abolitionist stance on animal exploitation and promotes nothing less than veganism. Along with our values and work regarding non-humans, we value respect amongst each other. Peaceful, respectful communication with members of the general public and fellow activists is very important to us. We uphold a stance against all forms of unjust discrimination, such as (but not limited to) homophobia, racism and sexism. Bullying and/or harassment will not be tolerated within our organisation. Evidence of any non-compliance with the values aforementioned, at our events or from outside of them, will lead to a warning and/or a ban.
        </p>

    </div>
  </div>
</template>

<style scoped lang="scss">

  @import '@/assets/sass/base/_variables.scss';

  .container {
    display: flex;
    flex-direction: column;
  }

  .section-wide {
    display: flex;
    justify-content: center;
    align-items: center;

    .text-content {
      margin-top: 1rem;
      max-width: 300px;
    }

    #image-area {
      padding: 1rem 2rem;
    }
  }

  .float-image {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 60%;
      font-size: 1.2rem;
      margin-right: 1rem;
    }

    #about-image {
        width: 100%;
        height: 300px;
        background-image: url("../assets/MEDIA/Manchester_Outreach_04.png");
        background-repeat: no-repeat;
        background-size: 100% auto;
        // background-position: left center;
        margin: 1rem;
      }
  }

  .section-centered {
      width: 60vw;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .focal-content {
    position: relative;
    padding: 0.5rem;
  }

  .focal-content {
    &:before, &:after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
    }

    &:before {
      left: -5px;
      top: -10px;
      border-top: 4px solid $highlight-color-a;
      border-left: 4px solid $highlight-color-a;
    }

    &:after {
      right: -5px;
      bottom: -5px;
      border-bottom: 4px solid $highlight-color-a;
      border-right: 4px solid $highlight-color-a;
    }
  }

  @media screen and (max-width: 800px) {
      .float-image {
        flex-direction: column;

        p {
          width: 90%;
          font-size: 1rem;
        }
      }
  }

</style>
