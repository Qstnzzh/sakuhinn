#if UNITY_EDITOR
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEngine;

public class EnemyWaveDataImporter : EditorWindow
{
    [SerializeField] private GameObject _enemyPrefab = null;
    [SerializeField] private EnemyWaveData _waveDataAsset = null;
    [SerializeField] private string _outputPrefabPath = "Assets/SuccessSample/Prefabs";


    [MenuItem("Tools/EnemyWaveData/Show Importer")]
    private static void ShowWindow()
    {
        CreateWindow<EnemyWaveDataImporter>();
    }

    private void OnEnable()
    {
        var guid = AssetDatabase.FindAssets("t:EnemyWaveData").FirstOrDefault();
        if (!string.IsNullOrEmpty(guid))
        {
            var path = AssetDatabase.GUIDToAssetPath(guid);
            _waveDataAsset = AssetDatabase.LoadAssetAtPath<EnemyWaveData>(path);
        }
    }

    private void OnGUI()
    {
        var so = new SerializedObject(this);

        so.Update();

        EditorGUILayout.PropertyField(so.FindProperty("_enemyPrefab"), true);
        EditorGUILayout.PropertyField(so.FindProperty("_waveDataAsset"), true);
        EditorGUILayout.PropertyField(so.FindProperty("_outputPrefabPath"), true);

        so.ApplyModifiedProperties();

        if (GUILayout.Button("Waveプレハブ生成"))
        {
            if (!Directory.Exists(_outputPrefabPath))
            {
                Directory.CreateDirectory(_outputPrefabPath);
            }

            if (!IsValid()) return;

            GenerateWavePrefab();
        }
    }

    private bool IsValid()
    {
        if (!_enemyPrefab)
        {
            EditorUtility.DisplayDialog("エラー", "エネミープレハブを指定してください", "閉じる");
            return false;
        }
        if (!_waveDataAsset)
        {
            EditorUtility.DisplayDialog("エラー", "Waveデータを指定してください", "閉じる");
            return false;
        }
        if (!_enemyPrefab.GetComponent<Enemy>())
        {
            EditorUtility.DisplayDialog("エラー", "エネミープレハブにEnemyコンポーネントが存在しません", "閉じる");
            return false;
        }
        if (!_enemyPrefab.GetComponent<Spaceship>())
        {
            EditorUtility.DisplayDialog("エラー", "エネミープレハブにSpaceshipコンポーネントが存在しません", "閉じる");
            return false;
        }

        return true;
    }


    private void GenerateWavePrefab()
    {
        foreach (var waveData in _waveDataAsset.waveDatas)
        {
            var waveIns = new GameObject(waveData.name);
            waveIns.transform.position = waveData.pos;

            foreach (var enemyData in waveData.enemyDatas)
            {
                var enemyIns = Instantiate(_enemyPrefab);
                enemyIns.name = _enemyPrefab.name;
                enemyIns.transform.position = enemyData.pos;
                enemyIns.transform.eulerAngles = enemyData.rot;
                enemyIns.transform.localScale = enemyData.scale;

                var shipCmp = enemyIns.GetComponent<Spaceship>();
                shipCmp.canShot = enemyData.canShot;
                shipCmp.shotDelay = enemyData.shotDelay;
                shipCmp.speed = enemyData.speed;

                var enemyCmp = enemyIns.GetComponent<Enemy>();
                enemyCmp.hp = enemyData.hp;

                var childCnt = enemyIns.transform.childCount;
                for (int i = 1; i < childCnt; i++)
                {
                    DestroyImmediate(enemyIns.transform.GetChild(0).gameObject);
                }

                var shotOrg = enemyIns.transform.GetChild(0).gameObject;
                foreach (var shotData in enemyData.shotDatas)
                {
                    var shotIns = Instantiate(shotOrg, enemyIns.transform);
                    shotIns.name = shotOrg.name;
                    shotIns.transform.position = shotData.pos;
                    shotIns.transform.eulerAngles = shotData.rot;
                }
                DestroyImmediate(enemyIns.transform.GetChild(0).gameObject);

                enemyIns.transform.parent = waveIns.transform;
            }

            PrefabUtility.SaveAsPrefabAsset(waveIns, $"{Path.Combine(_outputPrefabPath, waveIns.name)}.prefab");

            DestroyImmediate(waveIns);
        }

        AssetDatabase.Refresh();
    }
}
#endif
