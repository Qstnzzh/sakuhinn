using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class TitleManager : MonoBehaviour
{
    // Press Space�̕���
    public GameObject pressSpace;
    // �e�L�X�g�_�ł̊Ԋu
    public float flashingInterval = 0.5f;
    IEnumerator Start()
    {
        while (true)
        {
            // flashingInterval�b���ɓ_��
            yield return new WaitForSeconds(flashingInterval);
            // ���݂̃A�N�e�B�u��Ԃ̔��΂��Z�b�g����Ɛ؂�ւ��
            pressSpace.SetActive(!pressSpace.activeSelf);
        }
    }
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            // �X�y�[�X�L�[�������ꂽ��Q�[���V�[����
            SceneManager.LoadScene("Stage");
        }
    }
}