<template>
    <div>
        <h3 class="text-center">Welcome</h3>
        <div class="container">
            <div class="card py-5">
                <form @submit.prevent="enterChat">
                <div class="form-group text-center">
                    <label for="name">Write Your Name</label>
                    <input type="text" name="name" class="form-control" v-model="name" />
                </div>
                <p class="text-danger text-center">{{ feedback }}</p>
                <input type="submit" class="btn btn-success btn-lg" value="Submit" />
            </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Welcome', 
    data(){
        return {
            name:'', 
            feedback:'', 
        }
    }, 
    methods:{
        enterChat(){
            if(this.name.length == 0){
                return; 
            }
            if(this.name.trim()){
                this.feedback = ''; 
                this.$router.push({name:'Chat', params:{name:this.name}}); 
            }else{
                this.feedback = 'Please enter your name'; 
            }
            console.log("enter chat"); 
        }
    }
}
</script>

<style scoped>
    input[type=text]{
        display:block; 
        margin:0 auto; 
        width:50%; 
    }
    input[type=submit]{
        display:block; 
        margin: 0 auto; 
    }
</style>