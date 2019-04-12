<template>
    <!--报表-->
    <div class="container">
        <nav class="pro-title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
                <el-breadcrumb-item>角色管理</el-breadcrumb-item>
            </el-breadcrumb>
        </nav>
        <div class="pro-body">
            <div class="tool">
                <el-button type="primary" plain size="mini" >本周</el-button>
                <el-button type="primary" plain size="mini" >本月</el-button>
                <el-button type="primary" plain size="mini" >本年度</el-button>
            </div>

            <div id="charts" style="width:800px;,height:400px" >
                <div id="main"  :style="{width:'100%',height:'400px'}"></div>
            </div>

        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    // var echarts = require('echarts');
    // 引入 ECharts 主模块
    // var echarts = require('echarts/lib/echarts');
    // 引入柱状图
    // require('echarts/lib/chart/bar');
    // 引入提示框和标题组件
    // require('echarts/lib/component/tooltip');
    // require('echarts/lib/component/title');

    export default {
        name: "Reportform",
        data() {
            return{
        }
        },
        mounted(){
            /*ECharts图表*/
            var myChart = echarts.init(document.getElementById('main'));
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['2018-11-01', '2018-11-03', '2018-11-05', '2018-11-07', '2018-11-09', '2018-11-11', '2018-11-13',
                    '2018-11-15','2018-11-17','2018-11-19','2018-11-21','2018-11-23','2018-11-25','2018-11-27','2018-11-29']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [1520, 652, 879, 1034, 990, 1330, 1320, 980, 1020, 1158, 975, 1214, 1350, 1240, 1320],
                    type: 'line'
                }]
            };
            myChart.setOption(option);

        }
    }
</script>

<style scoped>
    .pro-title {
        border-bottom: 1px solid #e5e5e5;
        line-height: 39px;
        height: 39px;
        overflow: hidden;

        background-color: #E4E7ED;
        padding: 0 20px;
        position: relative;
        z-index: 99;
    }

    .el-breadcrumb {
        line-height: 3;
    }
    .pro-body{
        margin-top: 20px;
        padding:10px 20px;
    }
    .reportForm{
        padding-top: 10px;
    }
</style>