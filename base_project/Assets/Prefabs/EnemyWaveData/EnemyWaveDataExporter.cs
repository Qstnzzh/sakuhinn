#if UNITY_EDITOR
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

public class EnemyWaveDataExporter : EditorWindow
{

    [SerializeField] private List<GameObject> _wavePrefabs = null;
    [SerializeField] private string _outPath = "Assets/SuccessSample/Scripts/EnemyWaveData";
    [SerializeField] private string _outAssetName = "SampleWaveData";


    [MenuItem("Tools/EnemyWaveData/Show Exporter")]
    static void ShowWindow()
    {
        GetWindow<EnemyWaveDataExporter>();
    }

    private void OnGUI()
    {
        var so = new SerializedObject(this);

        so.Update();

        EditorGUILayout.PropertyField(so.FindProperty("_wavePrefabs"), true);
        EditorGUILayout.PropertyField(so.FindProperty("_outPath"), true);
        EditorGUILayout.PropertyField(so.FindProperty("_outAssetName"), true);

        so.ApplyModifiedProperties();

        if (GUILayout.Button("ê∂ê¨"))
        {
            var scrObj = CreateInstance<EnemyWaveData>();

            foreach (var wave in _wavePrefabs)
            {
                var waveData = new EnemyWaveData.WaveData()
                {
                    name = wave.name,
                    pos = wave.transform.position,
                };

                foreach (Transform enemyObj in wave.transform)
                {
                    var orgShip = enemyObj.GetComponent<Spaceship>();
                    var orgEnemy = enemyObj.GetComponent<Enemy>();
                    var enemyData = new EnemyWaveData.EnemyData
                    {
                        hp = orgEnemy.hp,
                        pos = enemyObj.position,
                        rot = enemyObj.eulerAngles,
                        scale = enemyObj.localScale,
                        canShot = orgShip.canShot,
                        shotDelay = orgShip.shotDelay,
                        speed = orgShip.speed,
                    };

                    foreach (Transform shotObj in enemyObj.transform)
                    {
                        var shotData = new EnemyWaveData.ShotPositionData
                        {
                            pos = shotObj.position,
                            rot = shotObj.rotation.eulerAngles
                        };
                        enemyData.shotDatas.Add(shotData);
                    }

                    waveData.enemyDatas.Add(enemyData);
                }
                scrObj.AddWaveData(waveData);
            }

            if (!Directory.Exists(_outPath))
            {
                Directory.CreateDirectory(_outPath);
            }
            AssetDatabase.CreateAsset(scrObj, $"{Path.Combine(_outPath, Path.GetFileName(_outAssetName))}.asset");
        }
    }
}
#endif
