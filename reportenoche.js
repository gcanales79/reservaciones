const moment = require('moment-timezone');
const axios=require("axios");

let horainicial = moment().add(0,"day").format("YYYY-MM-DD") + " 05:00:00"
let horainicialx = moment(horainicial).format("X")
let horafinal = moment().add(0,"day").format("YYYY-MM-DD") + " 13:00:00"
let horafinalx = moment(horafinal).format("X")
let dia=moment(horafinal).format("dddd")

if(dia!="Sunday"){
reporte();
}

function reporte() {
  console.log("https://shielded-stream-29921.herokuapp.com/produccionhora/" + horainicialx + "/" + horafinalx)
  axios.get("https://shielded-stream-29921.herokuapp.com/produccionhora/" + horainicialx + "/" + horafinalx)
  .then(data => {
      console.log(data.data.count)
      axios.post("https://shielded-stream-29921.herokuapp.com/reporte",{
        piezasProducidas:data.data.count,
        turno:"noche"
      })
      .then(function(response){
        //console.log(response)
      })
      .catch(function(err){
        console.log(err)
      })
    }).catch(function (err) {
      console.log(err)
    })
  
}