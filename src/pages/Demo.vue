<template>
    <div id="demo">
        <h1 @click="toIndex">我是Demo</h1>
    </div>
</template>

<script>
export default{
    name:"demo",
    methods:{
        toIndex(){
            this.$http.get("/j/user/ahbei").then(function(a){
                console.log(a)
            },function(){
                console.log("error");
            });
            return;
            // this.router.push({path:"/Index"})
        }
    }
}
</script>

<style scoped>
h1{
    font-size:50px;
    color:green
}

</style>