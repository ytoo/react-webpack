//1. 导入 react
import React from 'react'
import ReactDOM from 'react-dom'

//2. 创建组件
import CommentList from '../components/CommentList'

//3. 渲染组件
// 参数1: what
// 参数2: where 
ReactDOM.render(<CommentList></CommentList>, document.getElementById('app'));
