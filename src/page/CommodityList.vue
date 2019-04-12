<template>
    <!--商品列表-->
    <div class="container">
        <nav class="pro-title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>商品列表</el-breadcrumb-item>
                <el-breadcrumb-item>平板电脑</el-breadcrumb-item>
            </el-breadcrumb>
        </nav>
        <el-row :gutter="30" style="margin-left:0; background-color:#fff;padding: 20px 0">
            <el-col :span="3" style="border-right: 1px solid #DCDFE6">
                <el-tree :data="data"
                         show-checkbox
                         node-key="id"
                         :default-expanded-keys="[1,11,2,21]"
                         :default-checked-keys="[213]"
                         :props="defaultProps"
                         @node-click="handleNodeClick"></el-tree>
            </el-col>
            <el-col :span="20">

                <div class="portlet-body">
                    <div class="table-toolbar">
                        <el-form :inline="true" :model="filters" class="demo-form-inline">
                            <el-form-item>
                                <el-input v-model="filters.name" placeholder="名称"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" v-on:click="getUsers">查询
                                    <i class="el-icon-search el-icon--right"></i>
                                </el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="success" @click="handleAdd">添加商品
                                    <i class="el-icon-plus el-icon--right"></i>
                                </el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="danger" @click="handleDelet">批量删除
                                    <i class="el-icon-delete el-icon--right"></i>
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
                                    width="80">
                            </el-table-column>
                            <el-table-column
                                    sortable="custom"
                                    align="center"
                                    prop="img"
                                    label="缩略图">
                            </el-table-column>
                            <el-table-column
                                    sortable="custom"
                                    align="center"
                                    prop="name"
                                    label="商品名称">
                            </el-table-column>
                            <el-table-column
                                    sortable="custom"
                                    align="center"
                                    prop="desc"
                                    label="描述">
                            </el-table-column>
                            <el-table-column
                                    sortable="custom"
                                    align="center"
                                    prop="price"
                                    label="单价">
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
                                    prop="state"
                                    label="发布状态">
                            </el-table-column>
                            <el-table-column
                                    align="center"
                                    prop="edit"
                                    label="编辑"
                                    width="130">
                                <template slot-scope="scope">
                                    <el-button  @click="handleEdit(scope.$index, scope.row)" type="primary">
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
                                    <el-button  @click.native.prevent="deleteRow(scope.$index, scope.row)"
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
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "CommodityList",
        data() {
            return {
                data: [{
                    id: 1,
                    label: '家用电器',
                    children: [{
                        id: 11,
                        label: '大家电',
                        children: [{
                            id: 111,
                            label: '空调'
                        }, {
                            id: 112,
                            label: '冰箱'
                        }, {
                            id: 113,
                            label: '洗衣机'
                        }]
                    }, {
                        id: 12,
                        label: '生活电器',
                        children: [{
                            id: 121,
                            label: '电风扇'
                        }]
                    }, {
                        id: 13,
                        label: '厨房电器',
                        children: [{
                            id: 131,
                            label: '电磁炉'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '电脑办公',
                    children: [{
                        id: 21,
                        label: '电脑整机',
                        children: [{
                            id: 211,
                            label: '笔记本'
                        }, {
                            id: 212,
                            label: '台式机'
                        }, {
                            id: 213,
                            label: '平板电脑'
                        }]
                    }, {
                        id: 3,
                        label: '个护化妆',
                        children: [{
                            id: 31,
                            label: '面部护肤',
                            children: [{
                                id: 311,
                                label: '护肤'
                            }, {
                                id: 312,
                                label: '面膜'
                            }]
                        }]
                    }]
                }, {
                    id: 4,
                    label: '钟表',
                    children: [{
                        id: 41,
                        label: '钟表',
                        children: [{
                            id: 411,
                            label: '男表'
                        }, {
                            id: 412,
                            label: '女表'
                        }, {
                            id: 413,
                            label: '儿童手表'
                        }, {
                            id: 414,
                            label: '座钟'
                        }]
                    }]
                }, {
                    id: 5,
                    label: '母婴',
                    children: [{
                        id: 51,
                        label: '奶粉',
                        children: [{
                            id: 511,
                            label: '成人奶粉'
                        }, {
                            id: 512,
                            label: '儿童奶粉'
                        }]
                    }]
                }, {
                    id: 6,
                    label: '服饰内衣',
                    children: [{
                        id: 61,
                        label: '女装',
                        children: [{
                            id: 611,
                            label: '衬衫'
                        }, {
                            id: 612,
                            label: '连衣裙'
                        }]
                    }, {
                        id: 62,
                        label: '男装',
                        children: [{
                            id: 621,
                            label: '长裤'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入分类名称', trigger: 'blur'},
                        {min: 2, max: 7, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    parentNode: [
                        {required: true, message: '请选择', trigger: 'change'}
                    ],
                    region: [
                        {required: true, message: '请选择父节点', trigger: 'change'}
                    ],
                    Enable: [
                        {required: true, message: '请选择', trigger: 'change'}
                    ],
                },
                filters: {
                    name: '',
                },
                tableData:[
                    {
                        id:'816752',
                        img:'' ,
                        name:'《索尼设计，塑造现代》',
                        desc:'索尼全盛时期工业设计作品首次集结成书并引进中国',
                        price:'2565',
                        date:'',
                        state:'已发布',
                    }
                ],
                currentPage: 1,// 当前页
                pageSize: 5, // 每页显示条目个数
                totalPages: 5,
                orderColumn: "id",
                //ascending, descending
                order: "ascending",



            };
        },
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