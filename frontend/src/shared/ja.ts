// eslint-disable-next-line import/no-anonymous-default-export
export default {
    home:{
        title:"TODO APP",
        description:"自分だけのTODOを作成しよう！",
        buttonTitle1:"新規アカウント作成",
        buttonTitle2:"ログイン",
    },
    signup:{
        title:"新規登録",
        instruction:"名前、メールアドレス、パスワードを入力してください。",
        validationCheck:{
            required:"この項目は必須です",
            email:"メールアドレスの形式が違います",
            password:"パスワードが短いです"
        },
        attribute:{
            name:{
                labelName:"name",
            },
            email:{
                labelName:"email",
                typeName:"email",
            },
            password:{
                labelName:"password",
                typeName:"password",
            }
        },
        buttonTitle:"新規登録する",
        gobackBotton:"ホームに戻る"
    }
}