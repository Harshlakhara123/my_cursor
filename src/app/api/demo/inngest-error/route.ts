import {inngest} from "@/inngest/client";

export async function POST(){
    await inngest.send({name: "Demo Error",data: {}});
    return Response.json({status:"started"});
}