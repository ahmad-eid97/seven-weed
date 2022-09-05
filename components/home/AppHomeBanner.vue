<template>
    <section class="banner">
        <h4>
            322 Beverly Boulevard Los Angeles, CA 90048
        </h4>
        <h2>
            <font-awesome-icon icon="fa-solid fa-square-phone-flip" />
            011 233 45 67
        </h2>
        <p>
            – open 7 days a week from 7am to 9pm –
        </p>
    </section>
</template>

<script>
export default {
    name: 'AppHomebanner'
}
</script>

<style>
    .banner {
        padding: 80px 50px 70px;
    }
    .banner h4 {
        color: rgb(51, 51, 51);
        font-size: 20px;
        font-weight: 700;
        line-height: 26px;
        margin-bottom: 10px;
        text-align: center;
    }
    .banner h2 {
        color: rgb(117, 179, 37);
        font-size: 54px;
        font-weight: 700;
        line-height: 64px;
        text-align: center;
    }
    .banner p {
        color: rgb(133, 134, 140);
        font-size: 15px;
        text-align: center;
        margin: 0;
    }
</style>