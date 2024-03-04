let url2="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let link= await getimage();
    console.log(link);
let img=document.querySelector("#result");
 img.setAttribute("src",link);
})


async function getimage()
{
    try{
        let res=await axios.get(url2);
         return res.data.message ;
    }catch(e){
        console.log("ERROR!",e);
    }
}