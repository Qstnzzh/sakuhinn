using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "EnemyData", menuName = "ScriptableObjects/CreateEnemyData")]
public class EnemyWaveData : ScriptableObject
{
    [System.Serializable]
    public class ShotPositionData
    {
        public Vector3 pos = default;
        public Vector3 rot = default;
    }

    [System.Serializable]
    public class EnemyData
    {
        public Vector3 pos = default;
        public Vector3 rot = default;
        public Vector3 scale = default;
        public float shotDelay = 0f;
        public bool canShot = false;
        public float speed = 0f;
        public int hp = 0;
        public List<ShotPositionData> shotDatas = new List<ShotPositionData>();
    }

    [System.Serializable]
    public class WaveData
    {
        public List<EnemyData> enemyDatas = new List<EnemyData>();
        public string name = "";
        public Vector3 pos = default;
    }


    public IReadOnlyList<WaveData> waveDatas => _waveDatas;

    [SerializeField] private List<WaveData> _waveDatas = new List<WaveData>();


    public void AddWaveData(WaveData e)
    {
        _waveDatas.Add(e);
    }
}
