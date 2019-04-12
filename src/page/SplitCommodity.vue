<template>
    <!--分类商品-->
    <div class="container">
        <nav class="pro-title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>分类商品</el-breadcrumb-item>
            </el-breadcrumb>
        </nav>
        <div class="pro-toolbar">
            <div class="tool">
                <el-button type="danger" icon="el-icon-delete" @click="handleDelete">删除所选分类</el-button>
                <el-button type="success" icon="el-icon-plus" @click="handleAddchild">添加子级分类</el-button>
                <el-button type="success" icon="el-icon-plus" @click="handleAdd">添加父级分类</el-button>
            </div>
        </div>
        <el-row :gutter="10" style="margin-left:0;background-color:#fff;padding-top: 20px;">
            <el-col :span="4" :offset="2">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-col>
            <el-col :span="8" :offset="2">
                <el-form :label-position="labelPosition" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="分类名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="是否父节点" prop="parentNode" >
                        <el-radio-group v-model="ruleForm.parentNode">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="选择父节点" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择父节点">
                            <el-option label="家用电器" value="dianqi"></el-option>
                            <el-option label="电脑办公" value="diannao"></el-option>
                            <el-option label="钟表" value="zhongbiao"></el-option>
                            <el-option label="母婴" value="muying"></el-option>
                            <el-option label="服饰内衣" value="fushi"></el-option>
                        </el-select>
                    </el-form-item>
                        <el-form-item label="是否启用" prop="Enable">
                            <el-radio-group v-model="ruleForm.Enable">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>

                    <el-form-item label="备注" prop="desc">
                        <el-input type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交修改</el-button>
                    </el-form-item>
                </el-form>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "SplitCommodity",
        data() {
            return {
                data: [{
                    label: '家用电器',
                    children: [{
                        label: '大家电',
                        children: [{
                            label: '空调'
                        }, {
                            label: '冰箱'
                        }, {
                            label: '洗衣机'
                        }]
                    }, {
                        label: '生活电器',
                        children: [{
                            label: '电风扇'
                        }]
                    }, {
                        label: '厨房电器',
                        children: [{
                            label: '电磁炉'
                        }]
                    }]
                }, {
                    label: '电脑办公',
                    children: [{
                        label: '电脑整机',
                        children: [{
                            label: '笔记本'
                        }, {
                            label: '台式机'
                        }]
                    }, {
                        label: '个护化妆',
                        children: [{
                            label: '面部护肤',
                            children: [{
                                label: '护肤'
                            }, {
                                label: '面膜'
                            }]
                        }]
                    }]
                }, {
                    label: '钟表',
                    children: [{
                        label: '钟表',
                        children: [{
                            label: '男表'
                        }, {
                            label: '女表'
                        }, {
                            label: '儿童手表'
                        }, {
                            label: '座钟'
                        }]
                    }]
                }, {
                    label: '母婴',
                    children: [{
                        label: '奶粉',
                        children: [{
                            label: '成人奶粉'
                        }, {
                            label: '儿童奶粉'
                        }]
                    }]
                }, {
                    label: '服饰内衣',
                    children: [{
                        label: '女装',
                        children: [{
                            label: '衬衫'
                        }, {
                            label: '连衣裙'
                        }]
                    }, {
                        label: '男装',
                        children: [{
                            label: '长裤'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                labelPosition:'left',
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
                }


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

    .pro-toolbar {
        height: 40px;
        width: 100%;
        margin: 30px 0;
    }

    .pro-toolbar .tool {
        float: left;
        padding: 10px;
    }
</style>