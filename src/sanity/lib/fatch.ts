import { createClient } from "next-sanity";

const client =createClient({
                              projectId:"ptphvysl",
                              dataset:"production",
                              useCdn:true,
                              apiVersion:"2023-10-10"
})
export async function sanityFetch({query, params={}}:{query:string,params?:any}){

      try  {
        const data =await  client.fetch(query,params)   
        return data;}                   

        catch(error){
                console.error("error fetching data ",error)
                throw error
        };
        
}