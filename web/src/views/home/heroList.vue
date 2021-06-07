<template>
    <div class='herolist'>
        <!-- 英雄列表 -->
        <card :data="heroList" titleBorder class="hero-list mt15">
            <i class="card-icon-l" slot="icon-l"></i>
            <i class="card-icon-r" slot="icon-r"></i>
            <!-- <div slot="img">
            <img class="w100 mt15" style="border-radius: 0.08rem" src="~assets/img/common/new_hero.jpg" alt />
            </div> -->
            <template slot-scope="scope">
            <ul class="clearfix pb15 pt5">
                <li class="hero" v-for="item in scope.item.hero_list" :key="item._id" @click="heroClick(item._id)">
                    <div class="avatar-container">
                        <img class="hero-avatar" :src="item.avatar" />
                    </div>
                    <h3 class="fs12 fc-2 mt5">{{item.name}}</h3>
                </li>
            </ul>
            </template>
            <div  slot="bottom" >我是底部</div>
        </card>
    </div>
</template>
<script>
import Card from 'components/content/Card'
import {
    getHeros,
  } from 'network/home'
export default {
    components: {
      Card,
    },
    data(){
        return{
            heroList:[]
        }
    },
    mounted() {
        this.getHeros()
    },
    methods:{
        async getHeros() {
            const res = await getHeros()
            if (!res) return
            this.heroList = res.data
            // console.log(this.heroList);
        },
    }
}
</script>
<style lang="scss">
    .hero {
        float: left;
        width: 17%;
        margin-bottom: 0.32rem;
        margin-right: 3.75%;
        text-align: center;

        &:nth-child(5n) {
            margin-right: 0;
        }

        .avatar-container {
            width: 100%;
            overflow: hidden;

            .hero-avatar {
                width: 100%;
                vertical-align: middle;
            }
        }
    }
</style>