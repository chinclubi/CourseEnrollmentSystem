"use strict";
var User = (function () {
    function User(id, isLogin, name, courses) {
        this.id = id;
        this.isLogin = isLogin;
        this.name = name;
        this.courses = courses;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map