using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestroyArea : MonoBehaviour
{
    void OnTriggerExit2D(Collider2D c)
    {
        // �R���C�_�[�������ɂȂ����u�Ԃɂ��Ă΂�Ă��܂��̂ŁA
        // �����̏ꍇ�͉������Ȃ�
        if (c.enabled == false) return;
        Destroy(c.gameObject);
    }
}

