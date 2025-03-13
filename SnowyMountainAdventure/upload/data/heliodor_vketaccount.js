
// const
const isTest = window.location.hostname.includes('test') || window.location.hostname.includes('localhost') || window.location.hostname.includes('hikky.dev')
const vketAccountURL = isTest ? 'https://sso.api.hikky.dev' : 'https://sso.api.vket.com'
const myvketURL = isTest ? 'https://resources.api.hikky.dev' : 'https://resources.api.vket.com'
let profile = false

// 初期化時にログイン状態チェック
; (async function () {
  const response = await hel_get_myvket_profile()
  if (response && response.profile) {
    profile = response.profile;
    console.log('profile:', profile)
  }
  })()

function hel_account_isloggedin() {
  return !!profile
}

async function hel_account_setusernamefromaccount() {
  if (!profile) {
    return
  }

  hel_skyway_set_user_name(profile.name);
}

function hel_account_openuseofterms() {
  window.open("https://account.vket.com/terms#common", '_blank')
}

function hel_account_openprivacypolicy() {
  window.open("https://account.vket.com/terms#privacy", '_blank')
}

async function hel_get_myvket_profile() {
  try {
    const tokenResponse = await fetch(`${vketAccountURL}/auth/token?audience=${window.location.origin}`, {
      credentials: 'include'
    })
    if (!tokenResponse.ok) {
      return
    }
    const token = (await tokenResponse.json()).jwt
    const response = await fetch(`${myvketURL}/api/myvket/user/profiles`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (!response.ok) {
      return
    }

    const json = await response.json()
    return json
  } catch (e) {
    console.error(e)
  }
}
