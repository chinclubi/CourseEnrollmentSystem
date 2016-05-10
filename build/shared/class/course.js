"use strict";
var Course = (function () {
    function Course(id, name, description, credit, prereq, sections) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.credit = credit;
        this.prereq = prereq;
        this.sections = sections;
    }
    return Course;
}());
exports.Course = Course;
//# sourceMappingURL=course.js.map