import {queryType } from "nexus";
export const Query = queryType({
    definition(t) {
        t.string('users',{
            resolve:()=>"get all users"
        })
        t.string('user',{
            resolve:()=>"get single user"
        })
        t.string('student',{
            resolve:()=>"get all student"
        })
        t.string('teacher',{
            resolve:()=>"get all teacher"
        })
        t.string('teachers',{
            resolve:()=>"get all teachers"
        })
        t.string('course',{
            resolve:()=>"get single course"
        })
        t.string('courses',{
            resolve:()=>"get all courses"
        })
        t.string('classrooms',{
            resolve:()=>"get single classrooms"
        })
        t.string('classrooms',{
            resolve:()=>"get all classrooms"
        })
        t.string('grades',{
            resolve:()=>"get singlr grades"
        })
        t.string('grades',{
            resolve:()=>'thi is grade query'
        })
        t.string('Department',{
            resolve:()=>"get all users"
        })
        t.string('Departments',{
            resolve:()=>"get all users"
        })
        t.string('schedule',{
            resolve:()=>'this is schedule'
        })
        t.string('announcements',{
            resolve:()=>'announcements'
        })
    },
});
module.exports = {
    Query
}