controller('valid',function () {
    var pageTitle='表单校验';
    this.title("表单校验组件");
    this.assign('valid',this.model('@valid:valid'));
    this.assign('layoutBaseConf',this.model('@layout:base'));
    this.layout('@layout:base','tpl').display();
});