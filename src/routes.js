import HomePage from './components/HomePage'
import SplitCommodity from './page/SplitCommodity'
import CommodityList from  './page/CommodityList'
import OrderList from './page/OrderList'
import MemberList from './page/MemberList'
import DeletedMembers from './page/DeletedMembers'
import RoleManagement from './page/RoleManagement'
import PrivilegeManagement from './page/PrivilegeManagement'
import AdministratorManagement from './page/AdministratorManagement'
import ReportForm from './page/ReportForm'


const routes = [
    {
        path: '/homePage',
        component: HomePage,
        children: [
            {path: 'splitCommodity', component: SplitCommodity, name: '分类商品'},
            {path: 'commodityList', component: CommodityList, name: '商品列表'},
            {path: 'orderList', component: OrderList, name: '订单列表'},
            {path: 'memberList', component: MemberList, name: '会员列表'},
            {path: 'deletedMembers', component: DeletedMembers, name: '删除的会员'},
            {path: 'roleManagement', component: RoleManagement, name: '角色管理'},
            {path: 'privilegeManagement', component: PrivilegeManagement, name: '权限管理'},
            {path: 'administratorManagement', component: AdministratorManagement, name: '管理员列表'},
            { path: 'reportForm', component: ReportForm, name: '统计报表' },
        ]
    },
]


export default routes;