
const g_hel_chatgpt_server = 'https://vket-helper-chan.api.vket.com/';

function hel_chatgpt_sendmessage(content, character_id, charaname, IsUI2023)
{
	var roomid = hel_skyway_get_roomid();
	if (roomid == '') roomid = 'testroom';
	
	var userid = hel_skyway_get_peerID();
	if (userid == '') userid = 'testuser';
	
	console.log("roomid : " + roomid + ", userid : " + userid);
	
	var json_data = {
		"user_id": userid,
		"role": "user",
		"content": content
	};
	
	var json_text = JSON.stringify(json_data);
	
	var xhr = new XMLHttpRequest();
	
	xhr.onload = function() {
		var res = xhr.responseText;
		
		const result_json = JSON.parse(res);
		
		if(IsUI2023)
		{
			const dst = {
				"content" : result_json.content,
				"created_at" : result_json.character_room.created_at,
				"charaname" : charaname
			}
	
			hel_script_CallCanvasComponentMethod("textchat_common", "TCViewModel", "NotifyChatGPTMessageFromJS", JSON.stringify(dst));
			hel_script_CallComponentMethod("", "", "hsOnReceiveChatGPT", result_json.content);
		}
		else
		{
			hel_script_CallComponentMethod("", "", "hsOnReceiveChatGPT", result_json.content);
		}
	};
	
	xhr.onerror = function() {
	};
	
	xhr.open('POST', g_hel_chatgpt_server +
		'open_ai/chat/gpt/characters/' + character_id +
		'/rooms/' + roomid + '/messages');
	
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.send(json_text);
}

function hel_chatgpt_bridge(name, text)
{
	if (name == "SendChatGPT") {
		textlist = text.split(',')
		
		character_id = textlist[0]
		message = textlist[1]

		charaname = "";
		if(textlist.length >= 3) charaname = textlist[2]
		
		var IsUI2023 = false;
		if(textlist.length >= 4) IsUI2023 = (textlist[3] == "1");
		
		hel_chatgpt_sendmessage(message, character_id, charaname, IsUI2023);
	}
}

hel_action_bridge_add(hel_chatgpt_bridge);

