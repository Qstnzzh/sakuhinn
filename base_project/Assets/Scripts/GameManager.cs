using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class GameManager : MonoBehaviour
{
    // ゲームオーバー画面
    public GameObject gameOverUI;
    void Start()
    {
        // 開始時は非表示
        gameOverUI.SetActive(false);
    }
    void Update()
    {
        // ゲームオーバー中にスペースキーを押したら再スタート
        if (IsPlaying() == false && Input.GetKeyDown(KeyCode.Space))
        {
            SceneManager.LoadScene("Stage");
        }
    }
    public void GameOver()
    {
        // ハイスコアの保存
        FindObjectOfType<Score>().Save();
        // エネミーのエミッターを停止
        FindObjectOfType<Emitter>().gameObject.SetActive(false);
        // ゲームオーバー画面表示
        gameOverUI.SetActive(true);
    }
    bool IsPlaying()
    {
        // ゲームオーバー画面の表示状態でゲーム進行中かどうか判定
        return gameOverUI.activeSelf == false;
    }
}