using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class TitleManager : MonoBehaviour
{
    // Press Spaceの文字
    public GameObject pressSpace;
    // テキスト点滅の間隔
    public float flashingInterval = 0.5f;
    IEnumerator Start()
    {
        while (true)
        {
            // flashingInterval秒毎に点滅
            yield return new WaitForSeconds(flashingInterval);
            // 現在のアクティブ状態の反対をセットすると切り替わる
            pressSpace.SetActive(!pressSpace.activeSelf);
        }
    }
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            // スペースキーが押されたらゲームシーンへ
            SceneManager.LoadScene("Stage");
        }
    }
}