<template>
    <div class="container">
        <div class="contact-details">
            <p>
                Curious about getting involved, or simply what we stand for? Send us a message below or come along to one of our events!
            </p><br/>
            <p>
                You can also find us on <a target="_blank" href="https://www.facebook.com/ManchesterAnimalAction/">Facebook</a> and <a target="_blank" href="https://www.instagram.com/manc_animal_action/">Instagram</a>.
            </p>
        </div>
        <div class="contact-form">
            <form>
                <label><p>Your name: </p></label>
                <input type="text"/>
                <label><p>Your email address: </p></label>
                <input type="text"/>
                <label><p>Subject: </p></label>
                <input type="text"/>
                <label><p>Message: </p></label>
                <textarea/>
                <button>Send</button>
                <button>Clear</button>
            </form>
        </div>
        <div class="call-to-action">
            <div>
                <p>
                    Curious about getting involved, or simply what we stand for? We'd love to hear from you!
                </p><br/>
                <p>
                    (you can also email us directly at sayhi@maca.org, come along to one of our events, or find us on <a target="_blank" href="https://www.facebook.com/ManchesterAnimalAction/">Facebook</a> and <a target="_blank" href="https://www.instagram.com/manc_animal_action/">Instagram</a>)
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

@import '@/assets/sass/base/_variables.scss';

    .container {
        margin: 0 auto;
        width: 85vw;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .contact-details {
            margin-top: 1rem;
            display: none;
            border-radius: 10px;
        }

        div {
            width: 40%;
        }

        form {
            text-align: left;
            min-width: 250px;
        }

        label {
            width: 100%;
            margin: 1.5rem 0 0.5rem;
        }

        input, textarea {
            width: 80%;
            height: 1.5rem;
            margin-bottom: 0.7rem;
            padding: 5px 10px;
            border: 1px solid black;
            border-radius: 6px;
        }

        textarea {
            height: 100px;
            width: 90%;
            resize: none;
        }

        button {
            width: 150px;
            border: 1px solid black;
            border-radius: 6px;
            padding: 0.5rem 1rem;
            margin-right: 1rem;
            margin-bottom: 1rem;
        }

        #contact-image {
            background-repeat: no-repeat;
            margin-left: 3rem;
        }
    }

    .call-to-action {
        font-size: 1.2rem;
        align-self: center;
        width: 550px;
        min-width: 50%;
        min-height: 340px;
        margin-left: 1rem;
        color: white;
        padding: 3rem 2rem;
        background: $highlight-color-a;
        border-radius: 0 15px 15px 0;
        position: relative;
        display: flex;
        align-items: center;

        &:before {
            content: '';
            position: absolute;
            color: black;
            bottom: 0px;
            top: 0px;
            left: -150px;
            border-right: 50px solid $highlight-color-a;
            border-left: 100px solid transparent;
            border-top: 170px solid transparent;
            border-bottom: 170px solid transparent;
        }

        &:after {
            content: 'REACH OUT!';
            color: $highlight-color-a;
            position: absolute;
            top: 0;
        }

        div {
            width: 100%;
            p {
                &:first-child {
                    font-size: 1.5rem;
                    padding: 0 1rem;
                }

                a {
                    color: white;

                    &:hover {
                        color: rgb(231, 231, 231);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        .container {
            background-image: none;
            flex-direction: column;

            div {
                width: 100%;
            }

            .call-to-action {
                display: none;
            }

            .contact-details {
                display: block;
                padding: 1rem;
                color: white;
                background: $highlight-color-a;

                a {

                    &:visited {
                        color: white;
                    }
                }
            }

            form {
                margin-top: 1rem;
                text-align: center;
            }
        }
    }
</style>
