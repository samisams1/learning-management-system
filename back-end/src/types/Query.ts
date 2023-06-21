import {queryType } from "nexus";
export const Query = queryType({
    definition(t) {
        t.string('users',{
            resolve:()=>"get all users"
        })
        t.string('user',{
            resolve:()=>"get single user"
        })
    },
});
module.exports = {
    Query
}