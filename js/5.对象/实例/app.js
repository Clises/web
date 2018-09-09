(function () {
    var n='hh';
    function person(name) {
        var _this={}
        _this._name=name;
        _this.say=function () {
            alert('强制调用父类'+_this. _name+n)
        }
        return _this
    }
    window.person=person;
}())
function stu(name) {
    var _this=person(name)
    var supers=_this.say;
    _this.say=function () {
        //强制调用父类
        supers.call(_this)
        alert('复写父类中的方法'+_this._name)
    }
    return _this
}
var t= stu("hahhh")
t.say()
