using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class GameManager : MonoBehaviour
{
    // �Q�[���I�[�o�[���
    public GameObject gameOverUI;
    void Start()
    {
        // �J�n���͔�\��
        gameOverUI.SetActive(false);
    }
    void Update()
    {
        // �Q�[���I�[�o�[���ɃX�y�[�X�L�[����������ăX�^�[�g
        if (IsPlaying() == false && Input.GetKeyDown(KeyCode.Space))
        {
            SceneManager.LoadScene("Stage");
        }
    }
    public void GameOver()
    {
        // �n�C�X�R�A�̕ۑ�
        FindObjectOfType<Score>().Save();
        // �G�l�~�[�̃G�~�b�^�[���~
        FindObjectOfType<Emitter>().gameObject.SetActive(false);
        // �Q�[���I�[�o�[��ʕ\��
        gameOverUI.SetActive(true);
    }
    bool IsPlaying()
    {
        // �Q�[���I�[�o�[��ʂ̕\����ԂŃQ�[���i�s�����ǂ�������
        return gameOverUI.activeSelf == false;
    }
}