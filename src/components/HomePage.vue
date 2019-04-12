<template>
    <!--导航栏-->
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="12">
                    <div class="grid-content header-logo">
                        <div class="logo">LOGO</div>
                        <h3>后台管理系统</h3>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content header-tool">
                        <el-row>
                            <el-col :span="3" :offset="6">
                                <div class="tool-option">
                                    <i class="iconfont icon-accountfilling"></i>
                                    <span class="username">{{username}}</span>
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="tool-option">
                                    <i class="iconfont icon-fangjian1"></i>
                                    <span class="tool-text">首页</span>
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="tool-option">
                                    <i class="iconfont icon-shuaxin"></i>
                                    <span class="tool-text">刷新</span>
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="tool-option">
                                    <i class="iconfont icon-fankui"></i>
                                    <span class="tool-text">个人信息</span>
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="tool-option">
                                    <i class="iconfont icon-shezhi"></i>
                                    <span class="tool-text">设置</span>
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="tool-option">
                                    <i class="iconfont icon-tuichu_u"></i>
                                    <span class="tool-text">退出</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <!--侧边栏-->
        <el-container>
            <el-aside width="201px">

                <el-menu :default-openeds="['1']"
                         default-active="1-1"
                         class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="iconfont icon-shangpin" style="margin-right: 5px;font-size: 18px;"></i>
                            <span>商品管理</span>
                        </template>
                        <el-menu-item index="1-1" @click="$router.push('/homePage/splitCommodity')">分类商品</el-menu-item>
                        <el-menu-item index="1-2" @click="$router.push('/homePage/commodityList')">商品列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="iconfont icon-guigecanshu" style="margin-right: 5px;font-size: 18px;"></i>
                            <span>订单管理</span>
                        </template>
                        <el-menu-item index="2-1" @click="$router.push('/homePage/orderList')">订单列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="iconfont icon-shouye" style="margin-right: 5px;font-size: 18px;"></i>
                            <span>会员管理</span>
                        </template>
                        <el-menu-item index="3-1" @click="$router.push('/homePage/memberList')">会员列表</el-menu-item>
                        <el-menu-item index="3-2" @click="$router.push('/homePage/deletedMembers')">删除的会员</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="iconfont icon-accountfilling" style="margin-right: 5px;font-size: 18px;"></i>
                            <span>管理员管理</span>
                        </template>
                        <el-menu-item index="4-1" @click="$router.push('/homePage/roleManagement')">角色管理</el-menu-item>
                        <el-menu-item index="4-2" @click="$router.push('/homePage/privilegeManagement')">权限管理</el-menu-item>
                        <el-menu-item index="4-3" @click="$router.push('/homePage/administratorManagement')">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="iconfont icon-baobiao" style="margin-right:5px;font-size: 18px;"></i>
                            <span>统计报表</span>
                        </template>
                        <el-menu-item index="5-1" @click="$router.push('/homePage/reportForm')">订单销量统计</el-menu-item>
                    </el-submenu>
                </el-menu>

            </el-aside>

            <el-main>
                <el-col :span="24" class="content-wrapper">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                username: 'admin',
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-container{
        /*height: 100%;*/
    }
    .el-header {
        background-color: rgb(8, 162, 186);
        color: #333;
        text-align: center;
        /*line-height: 60px;*/
    }
    body > .el-container {
        margin-bottom: 40px;
    }

    /*导航栏*/

    .grid-content {
        border-radius: 4px;
        min-height: 60px;
        color: white;

    }

    .header-logo {
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    .header-logo .logo {
        float: left;
        font-size: 14px;
        font-weight: bold;
        width: 50px;
        height: 50px;
        margin-left: 20px;
        border: 1px solid white;
        border-radius: 50%;
        line-height: 50px;
    }

    .header-logo h3 {
        float: left;
        margin: 0 0 0 20px;
        color: white;

    }

    .header-tool .tool-option {
        width: 100%;
        height: 52px;
        display: flex;
        flex-direction: column;
        padding-top: 5px;
        border-right: 2px solid rgb(10, 150, 190);
        cursor: pointer
    }

    .tool-option i {
        font-size: 25px;
        height: 30px;
    }

    .tool-option .username, .tool-option .tool-text {
        height: 22px;
    }

    /*侧边栏*/
    .el-aside {
        background-color: rgb(254,254,255);
        color: #333;
        text-align: left;
        /*line-height: 200px;*/

        border-right: solid 1px #e6e6e6;
        display: block;
        position: absolute;
        left: 0;
        top: 60px;
        bottom: 0;
    }
    .el-menu-vertical-demo {
        height: auto;
        border:none;
    }


    /*内容*/
    .el-main {
        background-color: #F2F6FC;
        color: #333;
        /*text-align: center;*/
        /*line-height: 160px;*/

        display: block;
        position: absolute;
        left:201px;
        top: 60px;
        bottom: 0;
        right: 0;
    }



</style>
