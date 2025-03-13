//********************************************************************************//
//
// impulse.h
// impulse
//
// Created by Okuty in 2014/04/10.
//
//********************************************************************************//
#pragma once

#include <string>
#include <map>


//========================================//
// ライブラリ読み込み
//========================================//
#ifdef _DEBUG
#	pragma comment( lib, "impulse_d.lib" )
#else
#	pragma comment( lib, "impulse_r.lib" )
#endif

//========================================//
// プロパティ
//========================================//
#define PROPERTY( _TAG_, _ARG_ ) \
class Peoperty##_TAG_ : public Property { \
public: virtual ~Peoperty##_TAG_ ( ) {} \
Peoperty##_TAG_ ( ) { set( #_TAG_, #_ARG_ ); } \
} __##Peoperty##_TAG_##__

#define GAME_BEGIN( _TITLE_ ) \
class _TITLE_ : public Game { \
public: \
	_TITLE_##( ) : Game( #_TITLE_ ) { } \
	virtual ~##_TITLE_##( ) { }

#define GAME_END \
} __game__;


//========================================//
// アセット
//========================================//
enum ASSET {
	ASSET_BUTTON,
	ASSET_TIMER,
	ASSET_HAZARD,
	ASSET_MARK,
	ASSET_MARBLE,
	ASSET_SCREEN,
	ASSET_NUMBER,
	ASSET_BACKGROUND,
};

enum STOPWATCH {
	START,
	STOP
};

//========================================//
// SE
//========================================//
enum SE {
	SE_HIT,
	SE_MISS,
	SE_SET,
};

//========================================//
// コマンド
//========================================//
enum CMD {
	POS_X,
	POS_Y,
	STATUS,
	TOUCH,
	VISIBLE,
	WIDTH,
	HEIGHT,
	PRIORITY,
};

//========================================//
// ステータス
//========================================//
const int BUTTON_NORMAL     = 0x1000;
const int BUTTON_TURNON     = 0x1001;
const int BUTTON_DISABLED   = 0x1002;
const int MARBLE_BREAK	    = 0x2000;
const int MARK_CLUB	        = 0x3001;
const int MARK_SPADE        = 0x3002;
const int MARK_DIA	        = 0x3003;
const int MARK_HEART        = 0x3004;
const int MARK_UP	        = 0x3005;
const int MARK_DOWN	        = 0x3006;
const int MARK_LEFT	        = 0x3007;
const int MARK_RIGHT        = 0x3008;
const int MARK_CIRCLE       = 0x3009;
const int MARK_MARU	        = 0x300A;
const int MARK_BATU	        = 0x300B;

//========================================//
// 画面サイズ
//========================================//
const int SCREEN_WIDTH = 1280;
const int SCREEN_HEIGHT = 720;

//========================================//
// 画面サイズ
//========================================//
const int CHIP_SIZE = 136;

//========================================V//
// property
//========================================//
class Property {
public:
	Property( ) { }
	virtual ~Property( ) { }
protected:
	static void set( const char * tag, const char * arg );
};

//========================================//
// game.cpp
//========================================//
class Game {
public:
	Game( const char * tag );
	virtual ~Game( );
	virtual void setup( ) { }
	virtual void update( ) { }
};

//========================================//
// メソッド
//========================================//
int  createAsset( ASSET asset );					// アセットの生成
void destroyAsset( int id );						// アセットの破棄
void setAsset(int id, CMD cmd, int value );			// コマンドセット
int getAsset(int id, CMD cmd);						// コマンドゲット
int  random( );										// ランダム値の取得
void finish( );							// 終了
void stopwatch( STOPWATCH sw );
void playSe( SE se );								// SEの再生
int level( );										// レベルの取得
void consoleWrite( const char* format, ... );//Debug用
