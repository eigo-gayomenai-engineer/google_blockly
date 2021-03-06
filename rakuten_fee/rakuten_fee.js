let data, line, message, Fee;
const rakuten_plan = [0, 980, 1980, 2980];
window.alert(rakuten_fee(2, 1));

// 機能：今月の楽天モバイル料金を算出する
// 関数名：楽天料金
// 引数： データ、回線
// 戻り値：料金説明文
function rakuten_fee(data, line) {
  if (data <= 1) {
    if (line == 1) {
      Fee = rakuten_plan[0];
    } else {
      Fee = rakuten_plan[1];
    }
  } else if (data <= 3) {
    Fee = rakuten_plan[1];
  } else if (data <= 20) {
    Fee = rakuten_plan[2];
  } else if (20 < data) {
    Fee = rakuten_plan[3];
  }
  message = ['今月の料金は',Fee,'円/月(税込',Math.floor(Fee * 1.1),'円)です。'].join('');
  return message;
}