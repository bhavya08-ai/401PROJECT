<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- <link rel="stylesheet" href="style.css"> -->
    <style>
      .adminlogpg{
        display: flex;
        justify-content: space-around;
        height:98vh;
        align-items: center;
      }
      input{
        border:none;
        outline: none;
        }
        form{
          border: solid 1px black;
          padding:20px;
          border-radius: 10px;
          background-color: white;
      }
      .one{
        width: 200px;
        border-radius:20px;
      }
      fieldset{
        background-color: white;
        border-radius: 10px;
      }
      .btn{
        background-color: #0842ed;
        color:white;
        height: 40px;
        width: 100px;
        border-radius:20px;
      }
      body{
          background-image: url('https://cdn-japantimes.com/wp-content/uploads/2019/03/n-medcert-a-20190311.jpg' );   
          background-repeat: no-repeat;
          background-size: cover ;      
      } 
      fieldset{
        background-color: white;
        border-radius: 10px;
      }
  </style>
  </head>

  <body>

    <div class="adminlogpg">
        <span class="dctsignup">
        <form action="/doctSignUP1" method="post" align="center">
            <h1>Admin SignIN</h1>
            <img src="./admin.jpg" width="100px" height="100px">
            <br>
            <span style="color:red">To sign up as Doctor you need admin details</span><br>
            
            <fieldset>
                <legend align="left">Enter Adimn Name</legend>
                <input type="text" name="adun" class="one" >
            </fieldset>

            <br>
            <fieldset>
                <legend align="left">Password</legend>
                <input type="password" name="adpd" placeholder="" class="one">
            </fieldset>
            <br>
            <br>
           
              <button name="signup3" type="submit" class="btn">Signup</button>
          
        </form>
    </span>
    
      
  </body>
</html>