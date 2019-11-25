<template>
  <div class="real-time" v-if="data" :style="{top:top}"  :class="!showvalid ? 'showvalid': ''">
        <div class="img"><img :src="data ? data.headPic : logo" alt=""></div>
        <div class="txt">{{data && data.createTimeDescribe || ''}}</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      logo:this.$store.state.userInfo.headPic,
      data:null,
      real:null,
      urlImg:this.urlImg,
      txtreal:null,
      inx:0,
      showvalid:true,
      list:null
    }
  },
  props:{
    top:{
      type:String,
      default:'120px'
    }
  },
  //去掉定时
  onUnload(){
    clearInterval(this.real);
    clearTimeout(this.txtreal);
  },
  //去掉定时
  onHide(){
    clearInterval(this.real);
    clearTimeout(this.txtreal);
  },
  onLoad(){
    clearInterval(this.real);
    clearTimeout(this.txtreal)
    this.data=[];
    this.real=null;
    this.txtreal=null;
    this.inx=0;
    this.showvalid=true;
    let payload={
      ossNumber:this.$store.state.shopId,
      openId:this.$store.state.openid
    };
    this.$store.dispatch('apiusergetRecordOfOss',payload)
    .then(res=>{
        this.list=res.rows;
        this.data=this.list[this.inx];
        let txtreal = setTimeout(()=>{
            this.showvalid=false;
            // this.data=null;
            clearTimeout(txtreal);
        },4000)
        //8秒后变更
        this.real = setInterval(() => {
          this.setin();
        }, 12000);
    })
   
  },
  methods:{
    setin(){
        this.showvalid=true;
        this.inx++;
        if(this.inx >=this.list.length){
          this.inx=0;
        }
        
        this.data=this.list[this.inx];
        console.log(this.list[this.inx],this.inx);
        //5秒后去掉
        let txtreal = setTimeout(()=>{
            this.showvalid=false;
            // this.data=null;
            clearTimeout(txtreal)
        },4000)
    }
  }
}
</script>
<style lang="less" scoped>
  .real-time{
    position: absolute;
    top: 120px;
    left: -99%;
    height: 32px;
    width: 90%;
    line-height: 32px;
    background:rgba(37,37,37,0.58);
    border-radius: 15px;
    z-index: 999999;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    animation: leftsot 0.7s forwards;
    .img{
      max-width: 30px;
      height: 30px;
      margin: 1px;
      flex: 0 0 30px;
      img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
        margin: 0  auto;
      }
    }
    .txt{
      flex: 1;
      font-size: 12px;
      color: #fff;
      margin-left: 6px;
    }
   
    @keyframes leftsot {
      0%{
        left: -90%;
      }
      100%{
        left: 20px;
      }
    }
   
  }
  .showvalid{
    animation: tist 0.6s forwards;
  }
  @keyframes tist {
  0%{
    left: 20px;
  }
  100%{
    left: -90%;
  }
}
</style>