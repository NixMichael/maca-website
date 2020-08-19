<template>
    <div id="main-content">
        <p>
            Animal Action has an abolitionist stance on animal exploitation and promotes nothing less than veganism. Along with our values and work regarding non-humans, we value respect amongst each other. Peaceful, respectful communication with members of the general public and fellow activists is very important to us. We uphold a stance against all forms of unjust discrimination, such as (but not limited to) homophobia, racism and sexism. Bullying and/or harassment will not be tolerated within our organisation. Evidence of any non-compliance with the values aforementioned, at our events or from outside of them, will lead to a warning and/or a ban.
        </p>
    </div>
</template>

<style scoped lang="scss">
    #main-content {
        width: 60vw;
        height: calc(100vh - 320px);
        margin: 0 auto;
        display: flex;
        align-items: center;
        z-index: 0;
    }

    #main-content p {
        position: relative;
        padding: 3rem;
        line-height: 1.5rem;
        // background-image: linear-gradient(to right, rgb(195, 146, 214), rgb(198, 166, 211), rgb(195, 146, 214));
        background-image: linear-gradient(to right, rgb(103, 87, 109), rgb(154, 122, 165), rgb(113, 98, 119));
        color: white;

        &:before, &:after {
            content: '';
            background: black;
            box-shadow: 0 22px 15px 8px black;
            position: absolute;
            width: 45%;
            height: 30px;
            bottom: 35px;
            z-index: -2;
        }

        &:before {
            left: 18px;
            transform: rotate(-1.9deg);
        }

        &:after {
            right: 18px;
            transform: rotate(1.9deg);
        }

    }

    // #main-content p::before, #main-content p::after {
    //     font-size: 3rem;
    //     content: '"';
    //     position: absolute;
    // }

    // #main-content p::before {
    //     top: -15px;
    //     left: -5px;
    // }

    // #main-content p::after {
    //     bottom: -40px;
    //     right: 0px;
    // }

</style>
