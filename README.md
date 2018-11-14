# Jobs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 如何编辑和发布该项目

你需要安装，安装之前可以直接输入 node / yarn / git 命令看是否已经安装过了。
* node <https://nodejs.org/en/> 下载 LTS 版本即可
* yarn <https://yarnpkg.com> 参考安装说明，安装对应操作系统的版本即可
* git <https://git-scm.com/> 参照文档安装

### 下载代码
```bash
# 进入目录 xxxxx
cd xxxxx 
# 以下命令会分别创建两个目录，名为 Alvin-web 和 alvinzheng666.github.io
git clone git@github.com:alvinzheng666/Alvin-web.git
git clone git@github.com:alvinzheng666/alvinzheng666.github.io.git

# 进入源码目录
cd Alvin-web
# 启动项目
yarn start

```

此时打开电脑的 <http://127.0.0.1:4200> 即可看到效果

### 发布代码
```bash
cd Alvin-web
yarn build
# 等待，结束后，会生成一个 dist 目录
cd dist
cp -rf * ../../alvinzheng666.github.io
cd ../../alvinzheng666.github.io
git add .
git ci -m "update"
git push origin master
```

### 如何修改代码
\*.ts 基本不要动

你只需要修改 `src/app/{bio,cv,research/teaching}` 目录下面的 html 即可。修改完后即可在页面上查看效果。
