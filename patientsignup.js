<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- <link rel="stylesheet" href="style.css"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

  </head>

  <body>

   
      <!-- Section: Design Block -->
      <section class="text-center">
        <!-- Background image -->
        <div class="p-5 bg-image" style="
              background-image: url('https://www.xmple.com/wallpaper/blue-gradient-white-linear-1920x1080-c2-87cefa-ffffff-a-105-f-14.svg');
              height: 300px;
              "></div>
        <!-- Background image -->

        <div class="card mx-4 mx-md-5 shadow-5-strong" style="
              margin-top: -100px;
              background: hsla(0, 0%, 100%, 0.8);
              backdrop-filter: blur(30px);
              ">
          <div class="card-body py-5 px-md-5">

            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Sign up now</h2>
                <form action="/ptcreate" method="post" align="center">
                  <!-- 2 column grid layout with text inputs for the first and last names -->
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" name="ptname"  class="form-control" />
                        <label class="form-label" >Username</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input class="form-control" type="tel" name="phone"  pattern="[0-9]{10}" />
                        <label class="form-label" >Contact Number</label>
                      </div>
                    </div>
                  </div>

            

                  <!-- Password input -->
                  <!-- <div class="form-outline mb-4">
                    <input type="password" id="form3Example4" class="form-control" />
                    <label class="form-label" for="form3Example4">Password</label>
                  </div> -->

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="password" name="pt_crt_pass" id="pass" class="form-control" />
                        <label class="form-label" >Create Password</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="password" id="repass" class="form-control" />
                        <label class="form-label">confirm Password</label>
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="number" name="ptage" class="form-control" />
                        <label class="form-label" >Age</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="number" name="ptweight" class="form-control" />
                        <label class="form-label">Weight</label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
            
                        <select name="ptgender" class="form-control">
                          <option selected disabled value=""></option>
                          <option>Female</option>
                          <option>Male</option>
                          <option>Other</option>
                        </select>
                        <label class="form-label" >Gender</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" name="ptprob" class="form-control" />
                        <label class="form-label">Problem</label>
                      </div>
                    </div>
                  </div>
                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label class="form-check-label" for="form2Example33">
                      Agree that the details provided are correct
                    </label>
                  </div>

                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>

                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
<!-- Section: Design Block -->

    <script>
      var password = document.getElementById("pass")
      , confirm_password = document.getElementById("repass");

    function validatePassword(){
      if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity('');
      }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
    </script>
  </body>
</html>

 <!-- <div class="ptsignuppg">
        <span class="ptsignup">
        <form action="/ptcreate" method="post" align="center">
            <h1> Patient Sign UP</h1>
            <img src="./ptimg.jpg" width="100px" height="100px">

            <fieldset>
                <legend align="left">Enter User Name</legend>
                <input type="text" name="ptname" class="one" >
            </fieldset>
            <br>
            <fieldset>
                <legend align="left">Create Password</legend>
                <input type="password" name="pt_crt_pass" id="pass" placeholder="" class="one">
            </fieldset>
            <br>
            <fieldset>
                <legend align="left">Re-Enter Password</legend>
                <input type="password" name="pt_con_pass" id="repass" placeholder="" class="one">
            </fieldset>
            <br>
            <fieldset>
              <legend align="left">AGE</legend>
              <input type="text" name="ptage" class="one" >
          </fieldset>
          <fieldset>
            <legend align="left">Weight</legend>
            <input type="text" name="ptweight" class="one" >
        </fieldset>
            
            Gender : <select name="ptgender">
                        <option selected disabled value=""></option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                    </select><br><br>
            <fieldset>
                <legend align="left">Problem</legend>
                <input type="text" name="ptprob" class="one" >
            </fieldset>     

            <br>
            
            <button name="ptsignup" type="submit" class="btn"> Signup</button>
          </form> 
    </span>--></br>