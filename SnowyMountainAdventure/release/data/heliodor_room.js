// Room Server

const api_host = "https://v1.api.vketcloud.com/"

function getRandomRoom(world_id, option ={}) {
    if(!world_id){
        return 
    }
    let fn_done = option.done || null;
    let fn_error = option.error || null;

    let url = '/rooms/random/'+world_id;
    apiAjax("GET", url, {
        done : fn_done,
        error : fn_error,
    })
}


function createNewRoom(world_id, option ={}){
    if(!world_id){
        return 
    }
    let fn_done = option.done || null;
    let fn_error = option.error || null;

    let url = '/rooms';
    apiAjax("POST", url, {
        data : {world_id: world_id},
        done : fn_done,
        error : fn_error,
    })
}


function sendHeartbeat( room_id, player_count, option ={}) {
    if(!room_id || !player_count){
        return 
    }
    let fn_done = option.done || null;
    let fn_error = option.error || null;

    url = "/rooms/"+ room_id +"/heartbeat";
    apiAjax("POST", url, {
        data : {"player_count":player_count},
        done : fn_done,
        error : fn_error,
    })
}


function apiAjax(method, url, option = {}){
    let send_data = option.data || null;
    let fn_done = option.done || null;
    let fn_error = option.error || null;
    let api_url = api_host + url

    let ajax = new XMLHttpRequest();
    ajax.open(method, api_url);
    ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ajax.send(JSON.stringify(send_data))
    ajax.addEventListener("load", function(e){
        try {
            response_data = JSON.parse(e.target.response || "null")
            if(e.target.status == 200){
                if(fn_done){
                    fn_done(response_data);
                }
            }else{
                if(fn_error){
                    fn_error(response_data);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, false);
}


