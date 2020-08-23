<template>
    <div class="container">
        <img src="@/assets/MEDIA/Manchester_Vegan_Climate_Activism_Banner_01.png" alt="Vegan Outreach team"/>
        <div class="main-content">
            <br/>
            <p>
            Vegan Outreach takes place on Sundays, beginning at 1pm and normally ending at around 3pm.
            </p>
            <br/>
            <p>
            <i>
            To join us at this event, please have a read through the information below, and if there's anything you're unsure about, just send us a message. Other than that, all you need to do to get involved is come along! To keep up with when these events are taking place, visit the Events page and follow us on our Social Media platforms.
            </i>
            </p>
        </div>
        <div class="main-content">
            <div class="headerWrap"><p>Goals of Manchester Vegan Outreach</p></div>
            <div class="center-list">
                <ul>
                    <li>
                        To help the public view veganism as easy, delicious and achievable through friendly discussions and simple, educational resources.
                    </li>
                    <li>
                        To genuinely listen, understand and empathise respectfully with members of the public (remembering we were once non-vegans too), allowing us to engage them in meaningful conversation.
                    </li>
                    <li>
                        Communicating clearly and unapologetically about the ethics of animal use and the importance of veganism in creating a better future for all beings.
                    </li>
                    <li>
                        To showcase veganism in a positive manner by keeping our table attractive and engaging, provoking curiosity from the public allowing us to engage them further.
                    </li>
                </ul>
            </div>
        </div>

        <div class="main-content">
            <h2>FAQs</h2>
            <div class="headerWrap"><p>What type of food should I take to the stall?</p></div>
            <p>
            We greatly appreciate vegan food samples brought by activists, but please don't worry if you are unable to do so.
            </p>
            <br/>
            <p>
            Lots of members of the public say they want to go vegan but love cheese and meat, so please bring tasty, accessible alternatives to cheese and meat or home baked goodies that look delicious to help the public overcome their concerns that vegan food is limiting or bland. Many people struggle with change, and showing the public that they can go vegan and still enjoy many of the things they currently do allows veganism to become achievable in their eyes. Here are some suggestions of what to bring:
            <br/><br/>
            </p>
            <div class="center-list">
                <div class="note-style">
                    <div class="postit">
                    <ul>
                        <li>Sausage rolls</li>
                        <li>Cupcakes</li>
                        <li>Cookies</li>
                    </ul>
                    </div>
                    <div class="postit">
                    <ul>
                        <li>Cheese & crackers</li>
                        <li>Plant milks</li>
                        <li>Biscuits</li>
                    </ul>
                    </div>
                </div>
            </div>

            <p><i>
            (Bonus hint: we don't recommend bringing crisps or any food that's likely to blow away in a gust of wind!)
            </i></p>

            <br/><br/>
            <div class="headerWrap"><p>What can I do to help?</p></div>
            <p>
            Please help in any way you feel comfortable with, this could include:
            </p>
            <br/>
            <div class="center-list">
                <ul>
                    <li>Arriving early to help bring our equipment to Market Street</li>
                    <li>Bringing vegan food samples</li>
                    <li>Holding a placard</li>
                    <li>Giving out leaflets</li>
                    <li>Tidying the table (making it look presentable and enticing to the public)</li>
                    <li>Engaging in friendly discussions with the public</li>
                    <li>Preparing and replenishing the food samples (e.g. cutting up cheese to put on crackers)</li>
                    <li>Taking high-quality photos for our social media</li>
                </ul>
            </div>

            <br/><br/>
            <div class="headerWrap"><p>What should I say to the public?</p></div>
            <p>
            Approaching members of the public can be nerve-racking to begin with. Feel free to listen to other activists engaging with the public whilst you're gaining confidence. Most importantly, connect with members of the public in a genuine, respectful but honest, informative way, the same way you would have liked to have been spoken to when you were first interested in veganism. A good few opening questions to the public could be:
            </p>
            <br/>
            <div class="center-list">
                <ul>
                    <li>"Are you interested in becoming vegan?"</li>
                    <li>"What's motivated your interest in becoming vegan?"</li>
                    <li>"How can we help you go vegan?"</li>
                </ul>
            </div>

            <br/><br/>
            <div class="headerWrap"><p>Where can I share my ideas?</p></div>
            <p>
            Please send an email or a <a target="_blank" href="https://www.facebook.com/ManchesterAnimalAction/">Facebook</a> message. We'd love to hear from you!
            <br/><br/>
            We welcome constructive criticism, however, we ask that anything you wish to share is communicated in a peaceful, respectful manner.
            </p>

            <br/><br/>
            <div class="headerWrap"><p>Can I help the group in a different way?</p></div>
            <p>
            We aim to continually reflect upon and improve our event. If you have a skill you could use to help with our event, we'd love to hear about it, e.g. graphic design for new leaflets, photography, videography etc.
            <br/><br/>
            If you have any other questions, feel free to ask someone at the event or send us a message.
            </p>

            <br/><br/>
            <h2><strong>BURNOUT</strong></h2>
            <br/>
            <p>
            Please look after yourself and others. Burn out can creep up unexpectedly. Activists can sometimes develop strong feelings of powerlessness to completely end animal cruelty. Our personal wellbeing is crucial for healthy, effective activism. We need to be able to remain calm but assertive and show non-vegans that we’re fully rational, compassionate people who want to end violence towards animals. Please take regular breaks from activism and please talk to someone you trust if you need help, or reach out to '<a target="_blank" href="https://www.counsellingforsocialchange.org.uk/activists/">Counselling for Social Change</a>'.
            </p>

        </div>

    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/sass/base/_variables.scss';

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100vw;
    }

    .main-content {
        width: 60%;
        margin: 1rem 0;

        .center-list {
            display: flex;
            justify-content: center;

            div li:nth-child(2n) {
                color: white;
            }
        }

        li {
            list-style: none;
            margin-bottom: 1rem;
            margin-left: -2rem;
            &:nth-child(2n) {
                color: rgb(100,100,100);
            }
        }

        .headerWrap {
            display: flex;
            justify-content: center;
            font-weight: bold;

            p {
                padding: 1rem;
                margin: 1rem 0;
                position: relative;

                &:before, &:after {
                    position: absolute;
                    width: 3rem;
                    height: 100%;
                    top: 0.5rem;
                }

                &:before {
                    left: -2rem;
                    content: url('../assets/LOGO/HeaderImg01.jpg');
                }

                &:after {
                    right: -2rem;
                    content: url('../assets/LOGO/HeaderImg02.jpg');
                }
            }
        }

    }

    @media screen and (max-width: 800px) {
        .container {
            img {
                max-width: 80%;
            }
        }

        .main-content {
            width: 90%;
            .center-list .note-style {
                flex-direction: column;

                .postit:first-child {
                    margin-bottom: -30px;
                }
            }
        }
    }

</style>
