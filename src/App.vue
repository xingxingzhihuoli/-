<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    ul li{
        list-style: none;
    }
    img{
        display: block;
        width: 100%;
    }
    a{
        text-decoration: none;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight: normal;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
    }
</style>
