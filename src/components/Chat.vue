<template>
    <div>
        <h3>Chat {{ name }}</h3>
        <div class="card">
            <div class="card-body">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span>Name: {{ message.name }}</span>
                        <span>Messages: {{ message.content }}</span>
                        <span>Time: {{ message.time }}</span>
                    </li>
                </ul>
                <div class="card-form container">
                    <NewMessage :name="name" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from './NewMessage.vue'; 
import db from "../firebase/init"; 
import moment from 'moment'; 

    export default {
        components:{
            NewMessage, 
        },  
        name:'Chat', 
        props:['name'], 
        data(){
            return {
                messages:[], 
            }
        }, 
        created(){
            var ref = db.collection('messages').orderBy('time');  
            ref.onSnapshot(snapshot=>{
                snapshot.docChanges().forEach(change=>{
                    if(change.type == 'added'){
                        var doc = change.doc; 
                        this.messages.push({
                            id:doc.id, 
                            name:doc.data().name, 
                            content:doc.data().content, 
                            time:moment(doc.data().time).format('lll'), 
                        })
                    }
                })  
            })
        }
    }
</script>

<style scoped>
    .messages{
        max-height: 300px;
        overflow: auto;
    }
</style>