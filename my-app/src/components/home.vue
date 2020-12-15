<template>
<div class="container mrgnbtm">
            <div class="header">Select welding plan</div>
                <div class="row black" style="margin:0px; padding: 10px; height: 100%;"> 
                    <div class="col-md-12"> 
                        <ul class="list-group">
                            <li class="list-group-item list-font" v-for="plan in /*getListByIndex()*/ lists['welding-plans']" :key="plan.id" :class="{active: plan.iSactive}">{{plan.name}}</li>
                          </ul>
                    </div>
                </div>
        </div>
</template>
<script>
import io from 'socket.io-client';
export default {
    name: 'home',
    data(){
        return {

            lists:{
            "welding-plans" : [
                {name:'Plan1',id:0, iSactive: false},
                {name:'Root',id:1, iSactive: true},
                {name:'Hot Pass',id:2, iSactive: false},
                {name:'Cap',id:3, iSactive: false},
                {name:'Plan-2',id:4, iSactive: false},
                {name:'Plan-3',id:5, iSactive: false},
                {name:'Plan-4',id:6, iSactive: false},
                {name:'Plan-5',id:7, iSactive: false},
                {name:'Plan-6',id:8, iSactive: false},
                {name:'Plan-7',id:9, iSactive: false},
                {name:'Plan-8',id:10, iSactive: false}
                ]
            },
            // PORT---------------------
            socket : io('127.0.0.1:3000'),
            current_index: 0,
            current_list: []
        }
    },
        methods: {
        sendMessage(e) {
            e.preventDefault();
            
            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.message
            });
            this.message = ''
        },
        getListByIndex : function() {
            let index = this.current_index;
            let padding = 2; //  the number of items on top and below the index
            let bottom = index-padding >= 0? index-padding: 0;
            let top = index+padding <= this.current_list.length-1? index+padding: this.current_list.length-1;
            return this.current_list.slice(bottom,top);
        }
    },
    computed : {

    },
    mounted() {
        this.socket.on('MENU_UP', (data) => {
                var arr = this.lists[data.list_type];
                this.current_list = arr;
                this.current_index = data.index;
                if(data.index > 0 && data.index < arr.length){
                    var i = 0;
                    for(i=0; i < arr.length; i++){
                        if(i == data.index){
                        arr[i].iSactive = true;
                        }
                        else{
                        arr[i].iSactive = false;
                        } 
                    }
                }
        });
        this.socket.on('MENU_DOWN', (data) => {
                var arr = this.lists[data.list_type];
                this.current_list = arr;
                this.current_index = data.index;
                if(data.index >= 0 && data.index < arr.length){
                    var i = 0;
                    for(i=0; i < arr.length; i++){
                        if(i == data.index){
                        arr[i].iSactive = true;
                        }
                        else{
                        arr[i].iSactive = false;
                        } 
                    }
                }
        });
        this.current_list = this.lists['welding-plans'];
    }
}
</script>

<style  scoped>
    .header {
    padding: 2%;
    background-color: rgb(0, 0, 0);
    font-size: 50px;
    text-align: center;
    width: 100%;
    color: white;
 }
 
 .footer {
   padding: 2%;
    background-color: red;
    font-size: 50px;
    text-align: center;
    width: 100%
 }
 
 .dashboard {
   padding: 3% 1%;
 }

h1 {
  text-align: center;
}

.display-board {
  width: 100%;
  background-color: rgba(0, 119, 128, 0.719);
  padding: 5%;
}

.number {
  color: red;
  font-size: 75px;
  text-align: center;
}

.mrgnbtm {
  margin-top: 20px;
}
.black{
    background-color:black;
}
.for-color-white {
    color: white
}
.list-font{
    font-size:40px;
}
.list-hight{
    height: 400px;
}
</style>