<template>
  <div class="about">
    <div id="text">
    <h2>Welcome to Manchester Animal Climate Action</h2>
    <br/>
    <p>
      Manchester Animal Climate Action (aka MACA) is a vegan activism organisation in Manchester, UK, aiming to inspire and empower people to be vegan activists and work together to change society's attitude towards the animals it currently oppresses.
    </p>
    </div>
    <div id="image-area">
      <img src="@/assets/MEDIA/image01.jpg" alt="Not your mum, not your milk"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about {
    display: flex;
    justify-content: center;
    align-items: center;

    #text {
      width: 50%;
      padding-bottom: 5rem;
    }

    #image-area {
      padding: 1rem 2rem;
    }

    img {
      width: 300px;
    }
  }

</style>
