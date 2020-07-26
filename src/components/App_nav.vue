<template>
    <div class="app-nav">
        <img :src="app_nav_imgSrc" alt="img"
            class="app-nav-img">
        <div class="app-nav-basic">
            <router-link to="/forum">论坛</router-link>
            <router-link to="/">主页</router-link>
            <router-link to="/login">登录</router-link>
            <router-link to="/register">注册</router-link>
            <router-link to="/user">用户中心</router-link>
            <router-link to="/exit">退出</router-link>
        </div>
        <div class="app-nav-search">
            <el-input placeholder="搜搜看看"
                v-model="search">
                <el-button slot="append"
                    icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            app_nav_imgSrc: require("../assets/img/app-nav.png"),
            search: "",
            isLogin: false
        }
    },
    created() {
        // console.log(localStorage.getItem("isLogin"))
    }
}
</script>
<style scoped>
.app-nav {
    position: relative;
}
.app-nav-img {
    position: absolute;
    height: 160px;
    left: 50%;
    transform: translateX(-50%)
}
.app-nav-basic {
    position: absolute;
    width: 300px;
    right: 10px;
    display: flex;
    justify-content: space-around;
}
.app-nav-search {
    position: absolute;
    right: 10px;
    top: 100px;
    opacity: 0.8;
}
</style>