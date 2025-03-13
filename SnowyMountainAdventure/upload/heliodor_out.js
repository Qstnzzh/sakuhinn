
// const
const isTest = window.location.hostname.includes('test') || window.location.hostname.includes('localhost')
const vketAccountClientId = isTest ? '44xje89RZ1JG_usrvrsdZVMXA-jgM0_P34EffNN-2fk' : ''
const vketAccountURL = isTest ? 'https://account.hikky.dev' : 'https://account.vket.com'

	; (async function () {
		console.log('initialize')
		// 初期表示
		await hel_out_initializeAccount()
		if (hel_out_isLoggedIn()) {
			hel_out_showEnterButton()
		} else {
			hel_out_showLoginButton()
		}
	})()

//
const StartButtonList = [];

for (var n = 0; n < 3; n++) {
	StartButtonList.push(document.getElementById('startbutton' + n));
}

const roomidtext = document.getElementById('roomidtext');

var g_WorldID = "";
var g_RoomID = "";

function updateWorldID()
{
	g_WorldID = document.getElementById('worldselect').value;
	
	console.log("WorldID : " + g_WorldID);
}

//
function hel_skyway_start(MultiPlay)
{
	updateWorldID();
	
	//
	location.href = "./main.html?" +
		"worldid=" + g_WorldID;
}

StartButtonList[0].onclick = function()
{
	updateWorldID();
	
	// 空いているルームIDを取得
	getRandomRoom(g_WorldID, {
		done: function(responce) {
			var room_id = responce.data.room_id;
			console.log("getRandomRoom " + responce.data.room_id);
			
			g_RoomID = room_id;
			roomidtext.value = room_id;
			
			StartButtonList[2].disabled = false;
		},
		error: function() {
			console.log("getRandomRoom error");
		}
		});
};

StartButtonList[1].onclick = function()
{
	updateWorldID();
	
	// 新規にルームIDを作成
	createNewRoom(g_WorldID, {
		done: function(responce) {
			var room_id = responce.data.room_id;
			console.log("createNewRoom " + responce.data.room_id);
			
			g_RoomID = room_id;
			roomidtext.value = room_id;
			
			StartButtonList[2].disabled = false;
		},
		error: function() {
			console.log("createNewRoom error");
		}
		});
};

StartButtonList[2].onclick = function() {
	// 開始
	hel_skyway_start(true);
};

//
function hel_isLangJa()
{
	const browserLang = (window.navigator.languages && window.navigator.languages[0]) ||
		window.navigator.language ||
		window.navigator.userLanguage ||
		window.navigator.browserLanguage;
		
	switch(browserLang) {
	case 'ja':
	case 'ja-JP':
		return true;
	}
	
	return false;
}

// ログイン関連
document.getElementById("login").onclick = function () {
	if (hel_out_isLoggedIn()) {
		console.log('already logged in!')
		hel_out_showEnterButton()
		return
	}

	const state = Math.random().toString(32).substring(2)
	window.localStorage.setItem('state', state)

	const urlSearchParam = new URLSearchParams({
		response_type: 'code',
		scope: 'openid default',
		client_id: vketAccountClientId,
		redirect_uri: window.location.href.split('?')[0],
		state: state,
	}).toString()
	window.location.href = `${vketAccountURL}/oauth/authorize?${urlSearchParam}`
}

document.getElementById("logout").onclick = function () {
	if (!hel_out_isLoggedIn(false)) {
		console.log('already logged out!')
		hel_out_showLoginButton()
		return
	}

	hel_out_removeStorage()

	const urlSearchParam = new URLSearchParams({
		callback_url: window.location.href.split('?')[0]
	}).toString()
	window.location.href = `${vketAccountURL}/auth/logout?${urlSearchParam}`
}

async function hel_out_initializeAccount() {
	const params = new URLSearchParams(window.location.search)
	// code, state がない場合処理終了
	if (!params.has('code') || !params.has('state')) {
		// eslint-disable-next-line no-console
		console.log('no code or state found.')
		return
	}
	// state, ルーム情報がない場合処理終了
	if (!window.localStorage.getItem('state')) {
		// eslint-disable-next-line no-console
		console.log('no state found.')
		return
	}

	// state がおかしい
	if (window.localStorage.getItem('state') != params.get('state')) {
		// eslint-disable-next-line no-console
		console.error(
			`state does not match.`,
			window.localStorage.getItem('state'),
			params.get('state')
		)
		hel_out_removeStorage()
		return
	}

	// ログイン実施
	const response = await hel_out_issueRefreshToken(params.get('code'))
	hel_out_updateToken(response)
	// 一時データ削除
	window.localStorage.removeItem('state')
	// プロフィール取得
	hel_out_getProfile(window.localStorage.getItem('access-token'))
}

function hel_out_showLoginButton() {
	document.getElementById("loginButtons").style.display = "block";
}

function hel_out_showEnterButton() {
	document.getElementById("loginButtons").style.display = "none";
}

function hel_out_isLoggedIn(refresh = true) {
	if (!window.localStorage.getItem('refresh-token')) {
		hel_out_removeStorage()
		return false
	}
	const tokenCreatedAt = window.localStorage.getItem('token-created-at')
	const tokenExpiresIn = window.localStorage.getItem('token-expires-in')
	const expiresAt = Number(tokenCreatedAt) * 1000 + Number(tokenExpiresIn) * 1000
	if (!expiresAt || new Date(expiresAt) < new Date()) {
		// 有効期限切れ
		hel_out_removeStorage()
		return false
	}
	if (refresh) {
		hel_out_getIdToken()
	}

	return true
}

function hel_out_removeStorage() {
	console.log('hel_out_removeStorage')
	window.localStorage.removeItem('state')
	window.localStorage.removeItem('refresh-token')
	window.localStorage.removeItem('token-expires-in')
	window.localStorage.removeItem('token-created-at')
	window.localStorage.removeItem('access-token')
	window.localStorage.removeItem('id-token')
	window.localStorage.removeItem('vket_id')
}

async function hel_out_getIdToken() {
	const response = await hel_out_refreshRefreshToken(
		window.localStorage.getItem('refresh-token')
	)
	hel_out_updateToken(response)
	return response.id_token
}

async function hel_out_issueRefreshToken(code) {
	const formData = new FormData()
	formData.append('grant_type', 'authorization_code')
	formData.append('client_id', vketAccountClientId)
	formData.append('redirect_uri', window.location.href.split('?')[0])
	formData.append('code', code)

	const response = await fetch(`${vketAccountURL}/oauth/token`, {
		method: 'POST',
		body: formData
	})
	if (!response.ok) {
		// eslint-disable-next-line no-console
		console.error('failed to issue refresh token. status', response.status)
		return
	}

	const json = await response.json()
	return json
}

async function hel_out_refreshRefreshToken(refreshToken) {
	const formData = new FormData()
	formData.append('grant_type', 'refresh_token')
	formData.append('client_id', vketAccountClientId)
	formData.append('redirect_uri', window.location.href.split('?')[0])
	formData.append('refresh_token', refreshToken)

	const response = await fetch(`${vketAccountURL}/oauth/token`, {
		method: 'POST',
		body: formData
	})
	if (!response.ok) {
		// eslint-disable-next-line no-console
		console.error('failed to refresh refresh token. status', response.status)
		return
	}

	const json = await response.json()
	return json
}

async function hel_out_getProfile(accessToken) {
	const response = await fetch(`${vketAccountURL}/api/v1/me`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			Accept: 'application/json',
		}
	})
	if (!response.ok) {
		// eslint-disable-next-line no-console
		console.error('failed to refresh refresh token. status', response.status)
		return
	}

	const json = await response.json()
	window.localStorage.setItem('name', json.name)
	window.localStorage.setItem('name_en', json.name_en)
	window.localStorage.setItem('vket_id', json.vket_id)
}

function hel_out_updateToken(response) {
	window.localStorage.setItem('refresh-token', response.refresh_token)
	window.localStorage.setItem('token-expires-in', response.expires_in)
	window.localStorage.setItem('token-created-at', response.created_at)
	window.localStorage.setItem('access-token', response.access_token)
	window.localStorage.setItem('id-token', response.id_token)
}

