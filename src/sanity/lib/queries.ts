import { groq } from "next-sanity";

export const allproducts=groq`*[_type=="product"]`;
                                                         
export const three=groq`*[_type=="product"][0..2]`
                             
export const one=groq`*[_type=="product"][0]`
                             

