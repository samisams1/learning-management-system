import { makeSchema } from "nexus";
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import { Query } from "./types/Query";
export const schema =makeSchema({
    types:[Query],
    plugins: [nexusSchemaPrisma()],
    outputs:{
        schema:`${__dirname}/generated/schema.graphql`,
        typegen:`${__dirname}/generated/types.ts`
    }
   
});

module.exports={
    schema
}