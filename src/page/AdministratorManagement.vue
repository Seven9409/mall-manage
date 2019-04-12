<template>
     <!--管理员列表-->
    <div class="container">
        <nav class="pro-title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
                <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
            </el-breadcrumb>
        </nav>
        <div class="portlet-body">
            <div class="table-toolbar">
                <el-form :inline="true" :model="filters" class="demo-form-inline">
                    <el-form-item>
                        <el-input v-model="filters.name" placeholder="名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="getUsers">检索<i
                                class="el-icon-search el-icon--right"></i>
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" @click="handleDelet">批量删除<i
                                class="el-icon-delete el-icon--right"></i>
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="handleAdd">添加管理员
                            <i class="el-icon-plus el-icon--right"></i>
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <!--表格-->
            <div class="table-body">
                <el-table
                        @sort-change="sortChange"
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        border
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            align="center"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            sortable="custom"
                            align="center"
                            prop="id"
                            label="id"
                            width="80px">
                    </el-table-column>
                    <el-table-column
                            sortable="custom"
                            align="center"
                            prop="name"
                            label="登录名">
                    </el-table-column>
                    <el-table-column
                            sortable="custom"
                            align="center"
                            prop="sex "
                            width="80"
                            label="性别">
                    </el-table-column>
                    <el-table-column
                            sortable="custom"
                            align="center"
                            width="110"
                            prop="tel"
                            label="手机">
                    </el-table-column>
                    <el-table-column
                            sortable="custom"
                            align="center"
                            width="160"
                            prop="email"
                            label="邮箱">
                    </el-table-column>
                    <el-table-column
                            sortable="custom"
                            align="center"
                            prop="role"
                            label="角色">
                    </el-table-column>
                    <el-table-column
                            sortable="custom"
                            align="center"
                            prop="desc"
                            label="备注">
                    </el-table-column>
                    <el-table-column
                            sortable="custom"
                            align="center"
                            prop="date"
                            label="创建日期">
                    </el-table-column>
                    <el-table-column
                            sortable="custom"
                            align="center"
                            prop="update"
                            label="更新时间">
                    </el-table-column>
                    <el-table-column
                            sortable="custom"
                            align="center"
                            prop="state"
                            label="是否启用">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="edit"
                            label="编辑"
                            width="130">
                        <template slot-scope="scope">
                            <el-button @click="handleEdit(scope.$index, scope.row)" type="primary">
                                编辑
                            </el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="delete"
                            label="删除"
                            width="130">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)"
                                       type="danger">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!--分页-->
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5, 10, 15, 20]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalPages">
                </el-pagination>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdministratorManagement",
        data() {
            return {
                filters: {
                    name: '',
                },
                tableData: [
                    {
                        id:'1',
                        name:'admin',
                        sex:'男',
                        tel:'17621230884',
                        email:'1012139570@qq.com',
                        role:'超级管理员',
                        desc:'超级管理员',
                        date:'2017-09-05 21:27',
                        update:'2018-11-04 17:03',
                        state:'已启用',
                    },{
                        id:'2',
                        name:'游客',
                        sex:'女',
                        tel:'18125664884',
                        email:'1234569570@qq.com',
                        role:'',
                        desc:'游客',
                        date:'2017-09-05 21:27',
                        update:'2018-11-04 17:03',
                        state:'已启用',
                    }],
            }
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

    .portlet-body {
        padding: 10px 20px 20px;
    }

    .table-toolbar {
        margin-bottom: 20px;
        margin-top: 20px;
        padding-top: 10px;
    }

    .el-pagination {
        margin-top: 20px;
        text-align: right;
    }
</style>