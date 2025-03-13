#include "Impulse.h"

GAME_BEGIN(hayaoshi);


int button[9] = { 0 };
int number[9] = { 0 };
int answer[9] = { 0 };
int touch = 0;
int number_Q1 = 0;
int Q1 = 0;
int A1 = 0;
int Q2 = 0;
int A2 = 0;
int Q3 = 0;
int A3 = 0;
int number_Q2 = 0;
int number_Q3 = 0;
int count = 0;
int odai = 0;
int nokori = 0;
int clear = 0;
int time = 0;
int X = 0;
int Y = 0;
int i = 0;
int f1 = 0;
int f2 = 0;
int f3 = 0;
int f_count = 0;
int another_x = 0;

void setup() {
	clear = 0;
	setAsset(odai, POS_X, 160);
	setAsset(odai, POS_Y, 60);
	setAsset(nokori, POS_X, 1050);
	setAsset(nokori, POS_Y, 80);
	number_Q1 = createAsset(ASSET_NUMBER);
	number_Q2 = createAsset(ASSET_NUMBER);
	number_Q3 = createAsset(ASSET_NUMBER);
	count = createAsset(ASSET_NUMBER);
	setAsset(number_Q1, POS_X, 70);
	setAsset(number_Q1, POS_Y, 150);
	setAsset(f1, POS_X, 70);
	setAsset(f1, POS_Y, 150);
	setAsset(number_Q2, POS_X, 170);
	setAsset(number_Q2, POS_Y, 150);
	setAsset(f2, POS_X, 170);
	setAsset(f2, POS_Y, 150);
	setAsset(number_Q3, POS_X, 270);
	setAsset(number_Q3, POS_Y, 150);
	setAsset(f3, POS_X, 270);
	setAsset(f3, POS_Y, 150);
	setAsset(count, POS_X, 1200);
	setAsset(count, POS_Y, 80);
	setAsset(f_count, POS_X, 1200);
	setAsset(f_count, POS_Y, 80);
	setAsset(number_Q1, STATUS, random() % 9 + 1);
	Q1 = getAsset(number_Q1, STATUS);
	setAsset(number_Q2, STATUS, random() % 9 + 1);
	Q2 = getAsset(number_Q2, STATUS);
	setAsset(number_Q3, STATUS, random() % 9 + 1);
	Q3 = getAsset(number_Q3, STATUS);
	for (i = 0; i < 9; i++) {
		X = random() % 1200 + 40;
		Y = random() % 360 + 300;
		if ((another_x < X + 100) && (another_x > X - 100)) {
			X = random() % 1200 + 40;
			Y = random() % 360 + 300;
		}
		button[i] = createAsset(ASSET_BUTTON);
		setAsset(button[i], POS_X, X);
		setAsset(button[i], POS_Y, Y);
		number[i] = createAsset(ASSET_NUMBER);
		setAsset(number[i], STATUS, i + 1);
		answer[i] = getAsset(number[i], STATUS);
		setAsset(number[i], POS_X, X);
		setAsset(number[i], POS_Y, Y);
		another_x = X;
	}

}

void update() {
	stopwatch(STOPWATCH::START);
	setAsset(count, STATUS, 5 - clear);
	time++;
	for (i = 0; i < 9; i++) {
		touch = getAsset(button[i], TOUCH);
		if (touch == 1 && answer[i] == Q1 && A1 == 0) {
			setAsset(number_Q1, VISIBLE, false);
			A1 = 1;
			time = 0;
		}
	}
	for (i = 0; i < 9; i++) {
		touch = getAsset(button[i], TOUCH);
		if (touch == 1 && answer[i] == Q2 && A1 == 1 && time >= 5 && A2 == 0) {
			setAsset(number_Q2, VISIBLE, false);
			A2 = 1;
			time = 0;
		}
	}
	for (i = 0; i < 9; i++) {
		touch = getAsset(button[i], TOUCH);
		if (touch == 1 && answer[i] == Q3 && time >= 5 && A2 == 1 && A3 == 0) {
			setAsset(number_Q3, VISIBLE, false);
			clear += 1;
			A3 = 1;
		}
	}
	if (A3 == 1) {
		number_Q1 = createAsset(ASSET_NUMBER);
		number_Q2 = createAsset(ASSET_NUMBER);
		number_Q3 = createAsset(ASSET_NUMBER);
		setAsset(number_Q1, POS_X, 70);
		setAsset(number_Q1, POS_Y, 150);
		setAsset(number_Q2, POS_X, 170);
		setAsset(number_Q2, POS_Y, 150);
		setAsset(number_Q3, POS_X, 270);
		setAsset(number_Q3, POS_Y, 150);
		setAsset(number_Q1, STATUS, random() % 9 + 1);
		Q1 = getAsset(number_Q1, STATUS);
		setAsset(number_Q2, STATUS, random() % 9 + 1);
		Q2 = getAsset(number_Q2, STATUS);
		setAsset(number_Q3, STATUS, random() % 9 + 1);
		Q3 = getAsset(number_Q3, STATUS);
		for (i = 0; i < 9; i++) {
			X = random() % 1200 + 40;
			Y = random() % 360 + 300;
			setAsset(button[i], POS_X, X);
			setAsset(button[i], POS_Y, Y);
			setAsset(number[i], STATUS, i + 1);
			setAsset(number[i], POS_X, X);
			setAsset(number[i], POS_Y, Y);
		}
		A1 = 0;
		A2 = 0;
		A3 = 0;
	}
	if (5 - clear == 0) {
		finish();
	}
}

GAME_END;