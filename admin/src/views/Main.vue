<template>
  <el-container style="height: 100vh">
    <!-- 头部 -->
    <el-header style="text-align: right; font-size: 12px">
     <div class="logo-title">
        <img src="../assets/img/home/logo1.png" alt="王者荣耀">
        <h2>{{title}}</h2>
     </div>
     <div>
       <span class="lgname">{{loginName}}</span>
       <el-button type="text" size="middle" style="color:grey" @click="loginOut"> <i class="el-icon-switch-button" style="color:#fdb933"></i> 退出</el-button>
     </div>
     
    </el-header>

    <el-container>
      <!-- 侧边栏菜单 -->
      <!-- <el-aside width="201px" style="background-color: #252a40"> -->
        <el-menu router :default-active="activePath" unique-opened :collapse="isCollapse" class="menu-style" :style="isCollapse?'':'width:200px'"
        background-color="#1c4a49" text-color="#fff" active-text-color="#16cac6">
          <li class="collapse-false" v-show="!isCollapse" @click="handleCollapse">
            <span>收起此栏</span>
            <i class="el-icon-back"></i>
          </li>
          <li class="collapse-true" v-show="isCollapse" @click="handleCollapse">
            <i class="el-icon-view"></i>
          </li>
          <template v-for="(menuItem,index) in MenuList" class="menulist">
            <el-submenu :index="menuItem._id"  v-if="menuItem.children.length>0" :key="index">
              <template slot="title">
                <i :class="menuItem.icon"></i><span>{{menuItem.name}}</span>
              </template>
              <template v-for="(menuChildren,lastInde) in menuItem.children"  >
                <el-menu-item-group :key="lastInde">
                  <template v-if="menuItem.children[lastInde].desc" slot="title">{{menuItem.children[lastInde].desc}}</template>
                  <el-menu-item :index="$route.path"
                    v-if="($route.path==='/hero/create'||$route.path.indexOf('/hero/edit')!==-1)&&menuItem.name==='英雄管理'"
                  >{{AddOrEdit}}</el-menu-item>
                  <el-menu-item :index="$route.path"
                    v-if="($route.path==='/article/create'||$route.path.indexOf('/article/edit')!==-1)&&menuItem.name==='文章管理'"
                  >{{AddOrEdit}}</el-menu-item>
                  <el-menu-item :index="menuItem.children[lastInde].path"> {{menuItem.children[lastInde].name}} </el-menu-item>
                </el-menu-item-group>
              </template>
            </el-submenu>
            <!-- 没有子节点 -->
            <el-menu-item :index="menuItem.path" :route="menuItem.path" :key="index" v-else>
                <i :class="menuItem.icon"></i>
                <span slot="title">{{menuItem.name}}</span>
            </el-menu-item>
          </template>
          <!-- 内容管理一级菜单 -->
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-fold"></i><span>分类管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分类</template>
              <el-menu-item index="/category"> 分类列表 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i><span>物品管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">物品</template>
              <el-menu-item index="/item">物品列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-help"></i><span>英雄管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">英雄</template>
              <el-menu-item
                :index="$route.path"
                v-if="$route.path==='/hero/create'||$route.path.indexOf('/hero/edit')!==-1"
              >{{AddOrEdit}}</el-menu-item>
              <el-menu-item index="/hero/list">英雄列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-document"></i><span>文章管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">文章</template>
              <el-menu-item
                :index="$route.path"
                v-if="$route.path==='/article/create'||$route.path.indexOf('/article/edit')!==-1"
              >{{AddOrEdit}}</el-menu-item>
              <el-menu-item index="/article/list">文章列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-opportunity"></i><span>广告位管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">广告位</template>
              <el-menu-item index="/ad/list">广告位列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-user"></i><span>用户管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">用户</template>
              <el-menu-item index="/admin_user/list">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>
      <!-- </el-aside> -->

      <!-- 内容主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 导入网络请求函数
import { createCate, getCate, updateCate, getCateList, deleteCate } from 'network/admin/catalog'
export default {
  name: 'Main',
  data() {
    return {
      title:'模拟王者荣耀后台管理系统',
      loginName:sessionStorage.userName,
      isCollapse:false,
      MenuList:[]
    }
  },
  mounted() {
    this.getCateList()
  },
  computed: {
    activePath() {
      return this.$route.path
    },
    AddOrEdit() {
      if (this.$route.path.indexOf('/hero') !== -1) {
        if (this.$route.path === '/hero/create') {
          return '添加英雄'
        } else if (this.$route.path.indexOf('/hero/edit') !== -1) {
          return '编辑英雄'
        }
      } else {
        if (this.$route.path === '/article/create') {
          return '添加文章'
        } else if (this.$route.path.indexOf('/article/edit') !== -1) {
          return '编辑文章'
        }
      }

    }
  },
  methods: {
    //获取目录列表
    async getCateList() {
      const res = await getCateList()
      this.MenuList = res.data
    },
    // 退出登陆
    loginOut() {
      this.$confirm('是否退出当前账户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          window.localStorage.clear()
          this.$router.push('/login')
        })
      
    },
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  }
}
</script>

<style  scope>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#1a1d1d, #2b9290);
  color: #eee;
}
.logo-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lgname{
  font-size: 14px;
  padding-right:10px ;
}
.collapse-false{
  padding-left: 15px;
}
.menu-style{
  height: 100%;
}
.menu-style .collapse-false,.collapse-true{
  text-align: center;
  display: flex;
  color: #fff;
  justify-content: space-between;
  /* padding-left: 15px; */
  font-size: 12px;
  background: #0e2727;
  height: 56px;
  text-align: center;
  align-items: center;
}
.collapse-true i,.collapse-false i{
  font-size: 18px;
  padding: 15px 20px;
  cursor: pointer;
  padding-left: 24px;
}
.menu-style:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
/*隐藏文字*/
.el-menu--collapse .el-submenu__title span{
  display: none;
}
/*隐藏 > */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow{
  display: none;
}
.el-menu .el-submenu__title i,.el-menu .el-icon-s-home{color: #fff;}
</style>