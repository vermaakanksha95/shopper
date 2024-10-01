import DbConnect from "@/utils/dbConnect";

export const POST = async (req) => {
    let data =  await req.json();
    DbConnect();

    if(!data.name ||!data.email){
        
        return {status:400,body:"Missing required fields:name and email"};
    }

} 