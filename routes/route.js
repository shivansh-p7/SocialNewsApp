
const router=require('express').Router();
const {createUser,getUser,updateUser,deleteUser}=require("../controllers/userController")

//___________________________________________________userAPI'S_____________________________________________________________----
router.post("/user",createUser);
router.get("/user/:userId",getUser);
router.put("/user/:userId",updateUser);
router.delete("/user/:userId",deleteUser)

//___________________________________________________postsAPI's_____________________________________________________________----


router.post("/user",createUser);
router.get("/user/:userId",getUser);
router.put("/user/:userId",updateUser);
router.delete("/user/:userId",deleteUser)

//___________________________________________________commentsApI's___________________________________________________------






//_______________________________________________________deleteAPI's____________________________________________________







module.exports=router

