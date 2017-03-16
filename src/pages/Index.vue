<template>
    <div id="index">
        <h1 @click="toCreate">我是index</h1>
    </div>
</template>

<script>
export default{
    name:"index",
    methods:{
        toCreate(){
            this.router.push({path:"/Create"})
        }
    }
}
</script>

<style scoped>
h1{
    font-size:50px;
    color:red;
}

</style>