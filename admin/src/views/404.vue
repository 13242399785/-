<template>
    <div class="focus-wapper">
        <div class="number">
            404
        </div>
        <p>页面出错啦！</p>
        <!-- <smallFace></smallFace> -->
    </div>
</template>
<script>
// import smallFace from '@/components/SmallFace'
export default {
    data() {
        return {
            
        }
    },
    // components:{smallFace}
}
</script>
<style>
    .focus-wapper{
        height: 100%;
        background: #fff;
        padding-top: 5%;
        
    }   
    .focus-wapper p{
        text-align: center;
        font-size: 50px;
        margin: 20px 0;
    }
    .focus-wapper .number{
        background: #fff;
        
        position: relative;
        font: 900 30vmin 'Consolas';
        text-align: center;
        letter-spacing: 5vmin;
        text-shadow: 2px -1px 0 #000, 4px -2px 0 #0a0a0a, 6px -3px 0 #0f0f0f, 8px -4px 0 #141414, 10px -5px 0 #1a1a1a, 12px -6px 0 #1f1f1f, 14px -7px 0 #242424, 16px -8px 0 #292929;
        
    }
    .focus-wapper .number::before {
        background-color: #00b9b5;
        background-image: radial-gradient(closest-side at 50% 50%, #ffc107 100%, rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #e91e63 100%, rgba(0, 0, 0, 0));
        background-repeat: repeat-x;
        background-size: 40vmin 40vmin;
        background-position: -100vmin 20vmin, 100vmin -25vmin;
        width: 100%;
        height: 100%;
        mix-blend-mode: screen;
        -webkit-animation: moving 10s linear infinite both;
        animation: moving 10s linear infinite both;
        display: block;
        position: absolute;
        content: "";
    }
    @-webkit-keyframes moving {
        to {
            background-position: 100vmin 20vmin, -100vmin -25vmin;
        }
    }
    @keyframes moving {
        to {
            background-position: 100vmin 20vmin, -100vmin -25vmin;
        }
    }
</style>