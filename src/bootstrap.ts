import { getRepository } from "typeorm"
import { Tweet } from "./entity/Tweet";
import { User } from "./entity/User"

export const Bootstrap= async ()=> {
    const userRepo= getRepository(User)
    const user= userRepo.create({firstName: "arun" , lastName :"Sharma", age: 21});
    await userRepo.save(user).catch((err)=>{
        console.log("Error ",err);
        
    })
    console.log("new user saved ", user);
    
    const tweetRepo=getRepository(Tweet)
    const tweet=new Tweet();
    tweet.title="i finally got new job!";
    tweet.content=" it is near thaltej";
    tweet.user=Promise.resolve(user);
    await tweetRepo.save(tweet).catch((err)=>{
        console.log(err);
    })
}

export const find=async()=>{
    const userRepo=getRepository(User)
    const user=await userRepo.findOne({where: {firstName:"arun"}}).catch((err)=>{
        console.log(err);
        
    })
    if(user)
    console.log("user: ", user, await user.tweets);
    

}