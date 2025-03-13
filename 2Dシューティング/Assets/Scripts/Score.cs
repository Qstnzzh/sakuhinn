using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Text�N���X���g�p����ɂ������ĕK�v��using
using UnityEngine.UI;
public class Score : MonoBehaviour
{
    // �X�R�A��\������Text
    public Text scoreText;
    // �n�C�X�R�A��\������Text
    public Text highScoreText;
    // �X�R�A
    private int score;
    // �n�C�X�R�A
    private int highScore;
    // PlayerPrefs�ŕۑ����邽�߂̃L�[
    private string highScoreKey = "highScore";
    void Start()
    {
        Initialize();
    }
    void Update()
    {
        // �X�R�A���n�C�X�R�A���傫�����
        if (highScore < score)
        {
            highScore = score;
        }
        // �X�R�A�E�n�C�X�R�A��\������
        scoreText.text = score.ToString();
        highScoreText.text = "HighScore : " + highScore.ToString();
    }
    // �Q�[���J�n�O�̏�Ԃɖ߂�
    private void Initialize()
    {
        // �X�R�A��0�ɖ߂�
        score = 0;
        // �n�C�X�R�A���擾����B�ۑ�����ĂȂ����0���擾����B
        highScore = PlayerPrefs.GetInt(highScoreKey, 0);
    }
    // �|�C���g�̒ǉ�
    public void AddPoint(int point)
    {
        score = score + point;
    }
    // �n�C�X�R�A�̕ۑ�
    public void Save()
    {
        // �n�C�X�R�A��ۑ�����
        PlayerPrefs.SetInt(highScoreKey, highScore);
        PlayerPrefs.Save();
        // �Q�[���J�n�O�̏�Ԃɖ߂�
        Initialize();
    }
}