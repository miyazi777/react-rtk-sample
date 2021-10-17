# 概要
create-app-react . --template redux-typescriptで作成されるテンプレートプロジェクトを写経してRedux Toolkitの学習をしたサンプル 

## セットアップ
mkdir <project-directory>
cd <project-directory>
npx create-app-react . --template typescript
yarn add @reduxjs/toolkit react-redux


## サンプル
counterSliceが基本のサンプル。counterというstore内のカウントを+1、-1、指定された数だけ追加するというサンプル
statusSliceがextraReducerのサンプル。counterSliceの関数呼び出しに連動してstatusを変更しているサンプル
counter2Sliceが非同期処理のサンプル。counter2Sliceというstore内のカウントを指定された数を0.5秒後にだけ追加するというサンプル。

