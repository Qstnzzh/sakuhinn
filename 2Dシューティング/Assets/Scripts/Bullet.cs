using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bullet : MonoBehaviour
{
    // �e�̈ړ��X�s�[�h
    public int speed = 10;
    // �Q�[���I�u�W�F�N�g��������폜����܂ł̎���
    public float lifeTime = 5;
    // �U����
    public int power = 1;
    void Start()
    {
        GetComponent<Rigidbody2D>().velocity = transform.up.normalized * speed;
        // lifeTime�b��ɍ폜
        Destroy(gameObject, lifeTime);

    }

    // Update is called once per frame
    void Update()
    {
      
    }
}
