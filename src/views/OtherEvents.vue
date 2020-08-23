<template>
    <div class="container">
        <div class="main-content">
            <p>
                <i>
                The following organisations and events are not affiliated with Manchester Animal Climate Action, but are part of the vegan movement and are active in the Manchester area.
                </i>
            </p>
            <br/>
            <div class="headerWrap"><p><strong>Anonymous for the Voiceless: Cube of Truth</strong></p></div>
            <a target="_blank" href="https://www.anonymousforthevoiceless.org/"><img src="@/assets/MEDIA/events-image-01.jpg"/></a>
            <br/><br/>
            <div class="headerWrap"><p><strong>The Save Movement: Manchester Pig Save</strong></p></div>
            <a target="_blank" href="https://thesavemovement.org/"><img src="@/assets/MEDIA/events-image-02.jpg"/></a>
            <br/><br/>
            <div class="headerWrap"><p><strong>Single-Issue Animal Rights Campaigns</strong></p></div>
            <ul>
                <li><a target="_blank" href="https://www.facebook.com/AntiFurManchester/">Anti-Fur Manchester</a></li>
                <li><a target="_blank" href="https://www.facebook.com/shutdownbv/">Shut Down Belle Vue Greyhound Race Track in Manchester</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-content {
        width: 60vw;
        margin: 1rem 0;

        ul {
            width: 60%;
            margin: 0 auto;
        }

        li {
            margin-bottom: 1rem;
            text-align: left;
        }

        img {
            width: 500px;
        }

        .headerWrap {
            display: flex;
            justify-content: center;

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

        .main-content {
            width: 85vw;
        }

        img {
            max-width: 100%;
        }
    }
</style>
