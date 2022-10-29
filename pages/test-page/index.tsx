import { NextPage } from "next";
import Content from './components/content'
const Index:NextPage = ()=>{
  return (
    <div>
      <h1>我是测试主页</h1>
      <Content title="你好"></Content>
    </div>
    )
}

export default Index