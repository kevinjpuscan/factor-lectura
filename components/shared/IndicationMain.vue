<template>
    <div class="indication">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.indication{
    padding: 1.5rem 3rem;
    background: rgb(219, 219, 219);
    border:3px solid gray;

    h2{
        text-align: center;
    }
    p{
        margin: 0.5rem 0;
    }
}
</style>