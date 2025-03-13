using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestroyArea : MonoBehaviour
{
    void OnTriggerExit2D(Collider2D c)
    {
        // コライダーが無効になった瞬間にも呼ばれてしまうので、
        // 無効の場合は何もしない
        if (c.enabled == false) return;
        Destroy(c.gameObject);
    }
}

