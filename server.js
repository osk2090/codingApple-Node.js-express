const express = require('express');
const app = express();

app.listen(8080, function () {
    console.log('listen on 8080');
});
//서버를 띄우기 위한 기본셋팅(express 기준)

//누군가가 /pet으로 방문을 하면 pet에 관련된 안내문을 띄워주자

app.get('/pet', function (요청, 응답) {
    응답.send('펫용품 쇼핑할 수 있는 페이지입니다.');
});

app.get('/beauty', function (요청, 응답) {
    응답.send('뷰티용품을 쇼핑할 수 있는 페이지입니다.');
});

app.get('/', function (요청, 응답) {
    응답.sendFile(__dirname + '/index.html');
});