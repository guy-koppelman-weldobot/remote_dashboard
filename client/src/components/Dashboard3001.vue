
<template style="width:100; marging:0;border:3px red solid">
  <div class="container">
    <div class="header">
      <div class="header-column robot-mode">
        <div class="mode"><span>Mode:</span><span style="color:yellow">{{cycleData.Mode}}&#32;(<span v-bind:class="{'green':(isDryRun), 'red':(!isDryRun)}">{{isDryRun ? "Dry Run" : "Weld"}}</span>)</span></div>
        <div class="robot"><span>Robot:</span><span style="color:yellow">{{cycleData.Robot}}</span></div>
      </div>
      <div class="header-column pass" style="font-size:30px"><span>Pass:</span><span style="color:yellow">{{cycleData.Pass}}</span></div>
      <div class="header-column joint-heat">
        <div class="joint-num"><span>Joint #:</span><span style="color:yellow">{{cycleData.Joint}}</span></div>
        <div class="heat"><span>Heat input:</span><span style="color:yellow">{{InputHeat}} KJ/mm</span></div>
      </div>
    </div>
    <div class="main">
          <div class="mein-sections positions">
            <div>Axes</div>
            <div>&#x3B8; pos: <p style="display: inline; color:yellow">{{ThetaPos}} 	&deg;</p></div>
            <div>Z pos: <p style="display: inline; color:yellow">{{ZPos}} mm</p></div>
            <div>Y pos: <p style="display: inline; color:yellow">{{YPos}} mm</p></div>
          </div>
          <div class="mein-sections amp">
            <div style="margin-top: 55px;">Current</div>
            <div style="margin: auto; width: 90%; padding-top:150px; text-align: center; height: 45%;"><p style="display: inline; color:yellow; font-size:56px">{{Current}} A</p></div>
          </div>
          <div class="mein-sections state">
            <div style="margin-top: 55px;">State</div>
            <div style="margin: auto; width: 90%; padding-top:150px; text-align: center; height: 45%; color:yellow">{{cycleData.Status}}</div>
          </div>
          <div class="mein-sections volt">
            <div style="margin-top: 55px;">Voltage</div>
            <div style="margin: auto; width: 90%; padding-top:150px; text-align: center; height: 45%;"><p style="display: inline; color:yellow; font-size:56px">{{Voltage}} V</p></div>
          </div>
          <div class="mein-sections speed-arc">
            <div>Speed: <p style="display: inline; color:yellow">{{TravelSpeed}}</p><p style="color:yellow; font-size:20px">(CM/Min)</p></div>
            <div>AL: <p style="display: inline; color:yellow">{{cycleData.ArcL}} V</p></div>
            <div>AC: <p style="display: inline; color:yellow">{{cycleData.ArcC}} V</p></div>
          </div>
    </div>
    <div class="footer" style="border: 1px rgb(61, 61, 65) solid;">
      System messages:&#32;<p>{{cycleData.SystemMessage}}</p>
    </div>
  </div>
</template>

<script>

import io from 'socket.io-client';
import {bus} from '../main';
export default {
  name: 'Dashboard3001',
  components: {

  },
  data() {
      return {
          socket : io('127.0.0.1:3001'),
          cycleData: {},
          Current: 0.0,
          Voltage: 0.0,
          Zpos: 0.0,
          Ypos: 0.0,
          ThetaPos: 0.0,
          InputHeat: 0.0,
          TravelSpeed: 0.0,
          isDryRun: false,
          current_list: {}
      }
  },
  methods: {
    navigate: async function (data ){    
 
          //this.$store.commit('setList',json);
          //await  this.$router.push({path: data.target, name: 'list', params: {payload: data}});
          //this.$router.push({path: data.target + '/' + r.toString()},()=>{this.$store.commit('setList',json);});   

          // this.$router.push({path: data.target + '/' + r.toString()},()=>{
          //     this.$store.commit('setList',data);
          // }); 
          let r = Math.random();
          this.$store.commit('setList',data);
          this.$router.push({path: data.target + '/' + r.toString()},() => bus.$emit('ListUpdated',data));
          //this.$router.push({path: data.target + '/' + r.toString()});
    }
  },
  mounted () {
        this.socket.on('GET_DATA', (data) => {
            var t = data; //  JSON.parse(data);
            this.cycleData = t;
            this.Current = Number(t.Current).toFixed(2);
            this.Voltage = Number(t.Voltage).toFixed(2); 
            this.YPos = Number(t.Ypos).toFixed(2);
            this.ZPos = Number(t.Zpos).toFixed(2);
            this.ThetaPos = Number(t.ThetaPos).toFixed(2);
            this.InputHeat = isNaN(t.InputHeat) ? "" : Number.parseFloat(t.InputHeat).toFixed(2);
            this.TravelSpeed = this.TravelSpeed < 0 ? 0.0 : (Number(t.TravelSpeed) * 6).toFixed(2); // multiplication in 6 ids for converting mm/s to cm/min 
            this.isDryRun = t.isDryRun == "Dry run" ? true: false;
        });


        this.socket.on('NAV',(data) => {
          this.navigate(data);
        });

        this.socket.on('DASH',() => {
          this.$router.push({path: '/'}); 
        });
        
        this.socket.on('disconnect', ()=>{
           window.location.href = "localhost:3001/";
        });
  }
}
</script>

<style scoped>

.container{
  flex: auto;
  background-color: black;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100vw;
  /* border: 1px gray solid; */
}

.header,
.main,
.footer
{
  /* border: 1px lightgray solid; */
  color: white;
  margin-top:5px;
  width: 93vw;
}

.header{
    height: 20%;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
  }

  .main{
    height: 65%;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
  }

  .footer{
    justify-content:space-between;
    padding-left: 50px;
    display: inline-block;
    vertical-align: middle;
    height: 90px;
    line-height: 100px;
    margin-bottom: 5px;
  }

  .footer p{
    display: inline;
    color: darkgreen;
  }

  .footer-content {
        display: inline-block;
        vertical-align: middle;
  }

  .header-column{
    margin: 5px;
    width: 33%;
    height: 90%;
    border: 1px rgb(61, 61, 65) solid;
    border-radius: 5px;
  }

  .robot-mode{
    display:flex; 
    flex-direction: column; 
    justify-content: space-around; 
    align-items: center;
    height: 90%;
  }

  .robot,
  .mode
  {
    display:flex;
    flex-direction: row;
    justify-content:space-evenly; 
    align-items: center;
    width: 90%;
    height:35%;
    /* border: 1px white solid; */
    font-size: 20px;
  }

  .pass{
    display:flex;
    flex-direction: row;
    justify-content:space-evenly; 
    align-items: center;
    /* border: 1px white solid; */
    font-size: 20px;
  }


.joint-heat{
    display:flex;
    flex-direction: column;
    justify-content: space-around; 
    align-items: center;
}
  .joint-num,
  .heat
  {
    display:flex;
    flex-direction: row;
    justify-content:space-evenly; 
    align-items: center;
    width: 90%;
    height:35%;
    /* border: 1px white solid; */
    font-size: 20px;
  }

  .mein-sections{
    border: 1px rgb(61, 61, 65) solid;
    height: 97%;
    border-radius: 5px;
    font-size: 25px;
  }

  .positions{
    width: 19%;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly; 
    align-items: center;
  }

  .amp {
      width: 23%;
      text-align: center;
      font-size:25px;
  }
  .volt{
      width: 23%;
      text-align: center;
      font-size:25px;
  }
  .state{
      width: 10%;
      text-align: center;
      font-size:25px;
  }
  .speed-arc{
    width: 19%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .yellow{
    color: yellow;
  }
    .green{
    color: greenyellow;
    font:bolder;
    font-size: 24px;
  }

  .red{
    color:red;
    font:bolder;
    font-size: 24px;
  }
</style>