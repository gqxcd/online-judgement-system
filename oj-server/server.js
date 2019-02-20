const express = require('express');
const app = express();
const rest = require('./routes/rest');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://gqxcd:gqxcd123456@ds119085.mlab.com:19085/oj', {useNewUrlParser: true})

app.use('/api/v1', rest);

app.listen(3000);

// 为什么只用这行代码 前端的public文件就work了
app.use(express.static(path.join(__dirname, '../public')));
  