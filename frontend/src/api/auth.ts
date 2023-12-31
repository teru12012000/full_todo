import ja from "@/shared/ja";
import linkName from "@/shared/linkName";
import { loginType, resAuthData, signupType } from "@/shared/type";
//signupのAPI送信
export const signup=async(data:signupType)=>{
    const res=await fetch(linkName.signupApi,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    const resJson=await res.json()
    if(resJson.data===ja.signup.alradyHaveAccount){
        return [];
    }else{
        return resJson.data as resAuthData[];
    }
    
}
//ログインのAPI送信
export const login=async(data:loginType)=>{
    const res=await fetch(linkName.loginApi,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    const resJson=await res.json()
    if(resJson.data===ja.login.notingAcount||resJson.data===ja.login.differentPassword){
        return [];
    }else{
        return resJson.data as resAuthData[];
    }
}