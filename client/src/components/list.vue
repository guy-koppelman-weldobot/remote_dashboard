<template>
<div class="mrgnbtm">
            <div class="header">{{list_name == "" ? "Please select": list_name}}</div>
                <div class="row black" style="margin:0px; padding: 10px; height: 100%;"> 
                    <div class="col-md-12"> 
                        <ul class="list-group">
                            <!-- <li class="list-group-item list-font" v-for="plan in current_list" :key="plan.Name" :class="{active_item: plan.index}">{{plan.Name}}</li> -->
                            <li class="list-group-item list-font" v-for="plan in current_list" :key="plan.Name" :class="{active_item: plan.index}">{{plan.Name}}</li>
                          </ul>
                    </div>
                </div>
        </div>
</template>
<script>
//import io from 'socket.io-client';

import {bus} from '../main';
export default {
    name: 'list',
    data() {
        return {

            // PORT---------------------
            //socket : io('127.0.0.1:3000'),
            current_index: 0,
            current_list: this.$store.state.current_list.data.Item2,
            list_name: ''
        }
    },

    methods: {
    },

    // computed : {
    //     list(){
    //         return this.$store.state.current_list.data.Item2;
    //     },
    //     ListName (){
    //         return this.$store.state.current_list.data.Item1;
    //     }
    // },
    // watch: {
    //     List: {
    //         deep: true,
    //          handler() {
    //                 this.current_list = this.$store.state.current_list.data.Item2;
    //          }
            
    //     },
    //     ListName: {
    //         handler() {
    //             this.list_name = this.$store.state.current_list.data.Item1;
    //         }
    //     }
    // } ,
    mounted() {
        
        bus.$on('ListUpdated', (list) =>{
            this.current_list = list.data.Item2;
            this.list_name = list.data.Item1;
        });

        //this.current_list = this.$route.params.payload.list.data.Item2;
        //this.current_list = this.$store.state.current_list;
        this.current_list = this.$store.state.current_list.data.Item2;
        this.list_name = this.$store.state.current_list.data.Item1;
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

.active_item{
    background-color: black;
    border: 2px white solid;
    color:white;

}
</style>