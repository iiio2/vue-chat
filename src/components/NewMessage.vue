<template>
    <div>
        <form @submit.prevent="addMessage">
            <label for="newMessage">New Message</label>
            <input type="text" class="form-control" name="newMessage" v-model="newMessage" />
        </form>
    </div>
</template>

<script>

import db from '../firebase/init'; 

export default {
    props:['name'],
    data(){
        return {
            newMessage:'', 
        }
    }, 
    methods:{
        addMessage(){
            if(this.newMessage.trim().length == 0){
                return; 
            }
            db.collection('messages').add({
                content:this.newMessage, 
                name:this.name, 
                time:Date.now(), 
            })
            this.newMessage = ''; 
        }
    }
}
</script>

<style scoped>

</style>