import { makeSchema } from "nexus";
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
export const schema =makeSchema({
    types:[],
    plugins: [nexusSchemaPrisma()],
    outputs:{
        schema:`${__dirname}/generated/schema.graphql`,
        typegen:`${__dirname}/generated/types.ts`
    }
   
});

module.exports={
    schema
}