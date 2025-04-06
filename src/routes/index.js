const express=require(`express`);
const router=express.Router()
const v1apirotes=require(`./v1/index`)

router.use(`/v1/`,v1apirotes)


module.exports=router