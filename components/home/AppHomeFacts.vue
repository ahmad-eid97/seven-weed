<template>
    <section class="facts">
        <div class="row m-0">
            <h2>
                Few facts about Seven Weed
            </h2>
        </div>
        <div class="row m-0">
            <div class="col-md-6 text text-left">
                <font-awesome-icon icon="fa-solid fa-leaf" />
                <h3>
                    LOVE WORTHY QUALITY
                </h3>
                <p>
                    Duis auctor at lorem ipsum dolor nulla glavriadac – nibh interdum s interdum vel sollicitudin nibhlod. Suspendisse auctor volutpat turpis, vel sollicitudin nibh interdum non. Praesent quis tortor et est finibus dignissim quis id leo. Suspendisse tempor consectetur odio!
                </p>
            </div>
            <div class="col-md-6 image">
                <img src="https://the7.io/weed/wp-content/uploads/sites/51/2019/01/weed025-1000x1000.jpg" alt="">
            </div>
        </div>
        <div class="row m-0">
            <div class="col-md-6 image image-left">
                <img src="https://the7.io/weed/wp-content/uploads/sites/51/2019/01/weed003-1000x1000.jpg" alt="">
            </div>
            <div class="col-md-6 text">
                <font-awesome-icon icon="fa-solid fa-leaf" />
                <h3>
                    DISCOUNT PROGRAMS
                </h3>
                <p>
                    Nulla met from dolor! Duis auctor at lorem ipsum dolor nulla glavriadac – nibh interdum s interdum vel sollicitudin nibhlod. Suspendisse auctor volutpat turpis, vel sollicitudin nibh interdum non. Praesent quis tortor et est finibus dignissim quis id leo. Lorem ipsum dolor!
                </p>
            </div>
        </div>
        <div class="row m-0">
            <div class="col-md-6 text text-left">
                <font-awesome-icon icon="fa-solid fa-leaf" />
                <h3>
                    PREMIUM SERVICE
                </h3>
                <p>
                    Lorem ipsum dolor! Duis auctor at lorem ipsum dolor nulla glavriadac – nibh interdum s interdum vel sollicitudin nibhlod. Suspendisse auctor volutpat turpis, vel sollicitudin nibh interdum non. Praesent quis tortor et est finibus dignissim quis id leo.
                </p>
            </div>
            <div class="col-md-6 image">
                <img src="https://the7.io/weed/wp-content/uploads/sites/51/2019/01/weed001-1000x1000.jpg" alt="">
            </div>
        </div>
        <div class="row m-0">
            <div class="col-md-6 image image-left">
                <img src="https://the7.io/weed/wp-content/uploads/sites/51/2019/01/weed022-1000x1000.jpg" alt="">
            </div>
            <div class="col-md-6 text">
                <font-awesome-icon icon="fa-solid fa-leaf" />
                <h3>
                    EXPERIENCED STAFF
                </h3>
                <p>
                    Duis auctor at lorem ipsum dolor nulla glavriadac – nibh interdum s interdum vel sollicitudin nibhlod. Suspendisse auctor volutpat turpis, vel sollicitudin nibh interdum non. Praesent quis tortor et est finibus dignissim quis id leo. Suspendisse tempor consectetur odio!
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppHomeFacts',
}
</script>

<style lang="scss">
    .facts {
        padding: 80px 50px 70px;
        background-color: var(--main-color);
    }
    .facts h2 {
        color: rgb(255, 255, 255);
        font-size: 34px;
        font-weight: 700;
        line-height: 44px;
        text-align: center;
        padding: 0 25px 70px;
    }

    .facts .text {
        margin-bottom: 20px;
        padding-top: 60px;
        padding-left: 40px;
        padding-right: 25px;
        border-left: 4px dashed #9fca67;
    }
    .facts .text-left {
        /* margin-left: 70px; */
    }
    .facts .image-left {
        /* margin-left: 70px; */
    }
    .facts .text svg {
        color: rgba(255, 255, 255, 0.3);
        font-size: 32px
    }
    .facts .text h3 {
        color: rgb(255, 255, 255);
        font-size: 24px;
        font-weight: 700;
        line-height: 31.2px;
        margin-bottom: 15px;
        text-align: left;
    }
    .facts .text p {
        color: rgb(255, 255, 255);
        font-size: 15px;
        font-weight: 400;
        line-height: 25.5px;
        margin-bottom: 20px;
        text-align: left;
    }
    .facts .image {
        padding-left: 25px;
        padding-right: 40px
    }
    .facts .image img {
        width: 345px;
        height: 345px;
        max-width: 100%;
        border-radius: 50%;
    }
    @include sm {
        .facts .image img {
            width: 220px;
            height: 220px;
            margin-bottom: 20px;
        }
    }

</style>