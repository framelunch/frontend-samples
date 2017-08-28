import 'babel-polyfill'; // アプリ内で1度だけ読み込む エントリーポイントのてっぺん推奨
import $ from 'jquery';
import touchEvents from 'jquery-touch-events';
import anime from 'animejs';

import notice from 'libraries-frontend-framelunch/js/notice';

function init(data) {
  console.log(data);
}

notice.listen('init', init);
notice.publish('init', [123]);
