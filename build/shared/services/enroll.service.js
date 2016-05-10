"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var enroll_1 = require('../class/enroll');
var EnrollService = (function () {
    function EnrollService() {
        this.maxCredit = 22;
        this.currentCredit = { credit: 26 };
        this.enrollList = [
            {
                "course": {
                    "id": "01219245",
                    "name": "Individual Software Development Process"
                },
                "sec": {
                    "lecture": {
                        "id": "450",
                        "credit": 3,
                        "type": "Lecture",
                        "instructors": [
                            "Jittat Fakcharoenphol"
                        ],
                        "location": "E 203",
                        "date": "Fri 09.00-12.00"
                    },
                    "lab": {
                        "id": "",
                        "credit": 0,
                        "type": "Lab",
                        "instructors": [],
                        "location": "",
                        "date": ""
                    }
                },
                "type": "Credit"
            },
            {
                "course": {
                    "id": "01219449",
                    "name": "Software Patterns and Architecture"
                },
                "sec": {
                    "lecture": {
                        "id": "451",
                        "credit": 3,
                        "type": "Lecture",
                        "instructors": [
                            "Somnuk Keretho"
                        ],
                        "location": "E 507",
                        "date": "Mon 09.00-12.00"
                    },
                    "lab": {
                        "id": "",
                        "credit": 0,
                        "type": "lab",
                        "instructors": [],
                        "location": "",
                        "date": ""
                    }
                },
                "type": "Credit"
            },
            {
                "course": {
                    "id": "01219498",
                    "name": "Special Problems"
                },
                "sec": {
                    "lecture": {
                        "id": "",
                        "credit": 0,
                        "type": "lab",
                        "instructors": [],
                        "location": "",
                        "date": ""
                    },
                    "lab": {
                        "id": "451",
                        "credit": 3,
                        "type": "Lab",
                        "instructors": [
                            "Paruj Ratanaworabhan"
                        ],
                        "location": "E 505",
                        "date": "Sat 13.00-16.00"
                    }
                },
                "type": "Credit"
            },
            {
                "course": {
                    "id": "01219113",
                    "name": "Object-Oriented Programming II"
                },
                "sec": {
                    "lecture": {
                        "id": "450",
                        "credit": 2,
                        "type": "Lecture",
                        "instructors": [
                            "Paruj Ratanaworabhan"
                        ],
                        "location": "E 204",
                        "date": "Wed 08.30-10.30"
                    },
                    "lab": {
                        "id": "450",
                        "credit": 3,
                        "type": "Lab",
                        "instructors": [
                            "Paruj Ratanaworabhan"
                        ],
                        "location": "E201",
                        "date": "Thu 13.00-16.00"
                    }
                },
                "type": "Credit"
            },
            {
                "course": {
                    "id": "01219244",
                    "name": "Software Specification and Design Laboratory"
                },
                "sec": {
                    "lecture": {
                        "id": "",
                        "credit": 0,
                        "type": "lab",
                        "instructors": [],
                        "location": "",
                        "date": ""
                    },
                    "lab": {
                        "id": "450",
                        "credit": 3,
                        "type": "Lab",
                        "instructors": [
                            "Jittat Fakcharoenphol"
                        ],
                        "location": "E 507",
                        "date": "Fri 13.00-16.00"
                    }
                },
                "type": "Credit"
            },
            {
                "course": {
                    "id": "01219351",
                    "name": "Web Application Development"
                },
                "sec": {
                    "lecture": {
                        "id": "450",
                        "credit": 3,
                        "type": "Lecture",
                        "instructors": [
                            "Paruj Ratanaworabhan"
                        ],
                        "location": "E 203",
                        "date": "Mon 13.00-16.00"
                    },
                    "lab": {
                        "id": "",
                        "credit": 0,
                        "type": "lab",
                        "instructors": [],
                        "location": "",
                        "date": ""
                    }
                },
                "type": "Credit"
            },
            {
                "course": {
                    "id": "01219343",
                    "name": "Software Testing"
                },
                "sec": {
                    "lecture": {
                        "id": "450",
                        "credit": 3,
                        "type": "Lecture",
                        "instructors": [
                            "Arnon Rungsawang"
                        ],
                        "location": "E202",
                        "date": "Fri 13.00-16.00"
                    },
                    "lab": {
                        "id": "",
                        "credit": 0,
                        "type": "lab",
                        "instructors": [],
                        "location": "",
                        "date": ""
                    }
                },
                "type": "Credit"
            },
            {
                "course": {
                    "id": "01219243",
                    "name": "Software Specification and Design"
                },
                "sec": {
                    "lecture": {
                        "id": "450",
                        "credit": 3,
                        "type": "Lecture",
                        "instructors": [
                            "Jittat Fakcharoenphol"
                        ],
                        "location": "E 507",
                        "date": "Thu 13.00-16.00"
                    },
                    "lab": {
                        "id": "",
                        "credit": 0,
                        "type": "lab",
                        "instructors": [],
                        "location": "",
                        "date": ""
                    }
                },
                "type": "Credit"
            }
        ];
    }
    EnrollService.prototype.getCredit = function () {
        return this.currentCredit;
    };
    EnrollService.prototype.getList = function () {
        return this.enrollList;
    };
    EnrollService.prototype.getEnroll = function (courseId) {
        return this.enrollList.filter(function (enroll) {
            return enroll.course.id === courseId;
        })[0];
    };
    EnrollService.prototype.isEnrolled = function (course, sec) {
        return this.enrollList.filter(function (enroll) {
            return enroll.course.id === course.id &&
                enroll.sec[sec.type.toLowerCase()].id !== '';
        }).length !== 0;
    };
    EnrollService.prototype.canEnroll = function (course, sec) {
        return (!this.isEnrolled(course, sec)) && (course.credit + this.currentCredit.credit <= this.maxCredit);
    };
    EnrollService.prototype.enroll = function (course, section, type) {
        var enrolled = this.getEnroll(course.id);
        this.currentCredit.credit += section.credit;
        if (enrolled) {
            enrolled.sec[section.type.toLowerCase()] = section;
        }
        else {
            var _sec = {
                lecture: {
                    id: '',
                    credit: 0,
                    instructors: [],
                    location: '',
                    type: '',
                    date: ''
                }, lab: {
                    id: '',
                    credit: 0,
                    instructors: [],
                    location: '',
                    type: '',
                    date: ''
                }
            };
            _sec[section.type.toLowerCase()] = section;
            var enrollTmp = new enroll_1.Enroll(course, _sec, type);
            this.enrollList.push(enrollTmp);
        }
    };
    EnrollService.prototype.drop = function (courseId, sectionId, type) {
        var thisEnroll = this.getEnroll(courseId);
        if (type === 'lecture') {
            this.currentCredit.credit -= thisEnroll.sec.lecture.credit;
        }
        else {
            this.currentCredit.credit -= thisEnroll.sec.lab.credit;
        }
        if (type.toLowerCase() === 'lecture' && thisEnroll.sec.lab.id !== '') {
            thisEnroll.sec.lecture = {
                id: '',
                credit: 0,
                instructors: [],
                location: '',
                type: '',
                date: ''
            };
        }
        else if (type.toLowerCase() === 'lab' && thisEnroll.sec.lecture.id !== '') {
            thisEnroll.sec.lab = {
                id: '',
                credit: 0,
                instructors: [],
                location: '',
                type: '',
                date: ''
            };
        }
        else {
            var i = this.enrollList.indexOf(thisEnroll);
            this.enrollList.splice(i, 1);
        }
    };
    EnrollService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EnrollService);
    return EnrollService;
}());
exports.EnrollService = EnrollService;
//# sourceMappingURL=enroll.service.js.map